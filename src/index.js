const add =(numbers) => {
    if (numbers === "") {
        return 0;
    }

    // Regular expression to match "//[delimiter]\n[numbers...]" pattern
    let delimiter = ",";
    if (numbers.startsWith("//")) {
        // Extract delimiter and numbers part
        let delimiterMatch = numbers.match(/^\/\/(.*)\n/);
        if (delimiterMatch) {
            delimiter = delimiterMatch[1];
            numbers = numbers.substring(delimiterMatch[0].length);
        }
    }

    // Split by delimiter, newline, or comma, convert each to integer, and sum them
    let numsArray = numbers.split(new RegExp(`[${delimiter}\n,]+`));
    
    // will check for negative numbers
    let negatives = numsArray.filter(num => parseInt(num) < 0);
    if (negatives.length > 0) {
        throw new Error(`negative numbers not allowed ${negatives.join(", ")}`);
    }

    // Calculate the sum of all the numbers
    let sum = numsArray.reduce((acc, curr) => acc + parseInt(curr), 0);

    return sum;
}

module.exports = add;
