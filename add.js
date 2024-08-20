function add(numbers) {
    if (!numbers) {
        return 0;
    }

    let delimiter = /,|\n/;  // Default delimiters: comma or newline
    let customDelimiterMatch = numbers.match(/^\/\/(.+)\n/);

    // Handle custom delimiter
    if (customDelimiterMatch) {
        delimiter = new RegExp(customDelimiterMatch[1]);
        numbers = numbers.slice(customDelimiterMatch[0].length);  // Remove the custom delimiter part
    }

    // Split numbers string using the delimiter
    let numberList = numbers.split(delimiter);
    let negatives = [];
    let sum = 0;

    // Convert each string to a number and add to the sum
    numberList.forEach(num => {
        let number = parseInt(num, 10);
        if (number < 0) {
            negatives.push(number);
        }
        sum += number;
    });

    // Throw an error if there are any negative numbers
    if (negatives.length > 0) {
        throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
    }

    return sum;
}
console.log(add("1\n2,3"));
