const core = require("@actions/core");
const github = require("@actions/github");

async function run() {
  try {
    const token = core.getInput("github_token", { required: true });
    const octokit = github.getOctokit(token);

    const context = github.context;
    if (context.eventName !== "pull_request") {
      core.info("This action only runs on pull_request events.");
      return;
    }
    const pr = context.payload.pull_request;
    const { owner, repo } = context.repo;
    const pull_number = pr.number;

    // Get changed files in the PR
    const files = await octokit.paginate(octokit.rest.pulls.listFiles, {
      owner,
      repo,
      pull_number
    });

    // Get unique top-level directories
    const topDirs = new Set();
    files.forEach(file => {
      const path = file.filename;
      const parts = path.split('/');
      if (parts.length > 1) {
        topDirs.add(parts[0]);
      }
    });

    // Add labels for each directory
    const labels = Array.from(topDirs);
    if (labels.length > 0) {
      await octokit.rest.issues.addLabels({
        owner,
        repo,
        issue_number: pull_number,
        labels
      });
      core.info(`Added labels: ${labels.join(', ')}`);
    } else {
      core.info("No top-level directories changed.");
    }

  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
