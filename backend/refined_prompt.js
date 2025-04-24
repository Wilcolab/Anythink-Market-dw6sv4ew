/**
 * Converts a given string to dot.case format.
 *
 * This function takes an input string and converts it to a format where words
 * are separated by dots (e.g., "first name" becomes "first.name"). It supports
 * strings with spaces, underscores, and hyphens as word separators. The input
 * string is also converted to lowercase.
 *
 * @param {string} input - The input string to be converted. It must only contain
 * alphanumeric characters, underscores (_), hyphens (-), or spaces.
 * @returns {string} The converted string in dot.case format.
 * @throws {Error} Throws an error if the input is not a string or contains invalid characters.
 *
 * @example
 * // Converts a string with spaces to dot.case
 * toDotCase('first name'); // Returns 'first.name'
 *
 * @example
 * // Converts a string with underscores to dot.case
 * toDotCase('user_id'); // Returns 'user.id'
 *
 * @example
 * // Converts a string with hyphens to dot.case
 * toDotCase('mobile-number'); // Returns 'mobile.number'
 *
 * @example
 * // Converts an uppercase string to lowercase dot.case
 * toDotCase('SCREEN_NAME'); // Returns 'screen.name'
 *
 * @example
 * // Throws an error for invalid input
 * toDotCase('invalid#input'); // Throws Error: "Input is invalid"
 */
function toDotCase(input) {
    if (typeof input !== 'string' || !/^[a-zA-Z0-9_\-\s]+$/.test(input)) {
        throw new Error('Input is invalid');
    }

    return input
        .toLowerCase()
        .split(/[\s_\-]+/)
        .join('.');
}

// Example usage:
try {
    console.log(toDotCase('first name')); // first.name
    console.log(toDotCase('user_id')); // user.id
    console.log(toDotCase('SCREEN_NAME')); // screen.name
    console.log(toDotCase('mobile-number')); // mobile.number
    console.log(toDotCase('invalid#input')); // Throws error
} catch (error) {
    console.error(error.message);
}
/**
 * Converts a given string to kebab-case format.
 *
 * This function takes an input string and converts it to a format where words
 * are separated by hyphens (e.g., "Hello World" becomes "hello-world"). It supports
 * strings with spaces, underscores, and dots as word separators. The input
 * string is also converted to lowercase.
 *
 * @param {string} input - The input string to be converted. It must only contain
 * alphanumeric characters, underscores (_), dots (.), or spaces.
 * @returns {string} The converted string in kebab-case format.
 * @throws {Error} Throws an error if the input is not a string or contains invalid characters.
 *
 * @example
 * // Converts a string with spaces to kebab-case
 * toKebabCase('Hello World'); // Returns 'hello-world'
 *
 * @example
 * // Converts a string with underscores to kebab-case
 * toKebabCase('user_id'); // Returns 'user-id'
 *
 * @example
 * // Converts a string with dots to kebab-case
 * toKebabCase('screen.name'); // Returns 'screen-name'
 *
 * @example
 * // Converts an uppercase string to lowercase kebab-case
 * toKebabCase('MOBILE_NUMBER'); // Returns 'mobile-number'
 *
 * @example
 * // Throws an error for invalid input
 * toKebabCase('invalid#input'); // Throws Error: "Input is invalid"
 */
function toKebabCase(input) {
    if (typeof input !== 'string' || !/^[a-zA-Z0-9_\.\s]+$/.test(input)) {
        throw new Error('Input is invalid');
    }

    return input
        .toLowerCase()
        .split(/[\s_\.\-]+/)
        .join('-');
}

// Example usage:
try {
    console.log(toKebabCase('Hello World')); // hello-world
    console.log(toKebabCase('user_id')); // user-id
    console.log(toKebabCase('screen.name')); // screen-name
    console.log(toKebabCase('MOBILE_NUMBER')); // mobile-number
    console.log(toKebabCase('invalid#input')); // Throws error
} catch (error) {
    console.error(error.message);
}