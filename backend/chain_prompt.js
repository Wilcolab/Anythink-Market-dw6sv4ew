function toKebabCase(input) {
    if (typeof input !== 'string' || !/^[a-zA-Z\s]+$/.test(input)) {
        throw new Error("Input must be a string containing only alphabetical characters and spaces.");
    }
    return input.trim().toLowerCase().replace(/\s+/g, '-');
}

// Example usage:
try {
    console.log(toKebabCase("Good morning")); // Output: "good-morning"
} catch (error) {
    console.error(error.message);
}