// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
//     Example string : 'the quick brown fox'
//     Expected Output : 'The Quick Brown Fox '

const makeItBigger = (str) => {
    let result = "";
    let newArr = str.split(" ");
    for (let i = 0; i < newArr.length; i++){
        result += `${newArr[i][0].toUpperCase()}${newArr[i].substring(1)} `
    }
    return console.log(result);
}

makeItBigger("the quick brown fox");

// Write a JavaScript function that accept a list of country names as input and returns the longest country name as output.
//     longestCountryName(
//         ["Australia",
//         "Germany",
//         "United States of America"]
//         )
//     Expected output : "United States of America"

const longestCountryName = (arr) => {
    let result = "";
    for (let i = 0; i < arr.length; i++){
        if (result.length < arr[i].length) {
            result = arr[i];
        }
    }
    return console.log(result);
}

longestCountryName(["Australia", "Germany", "United States of America"])

// Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.

const vowelCounter = (str) => {
    let result = 0;
    let vowels = "AEIOUaeiou"
    for (let i = 0; i < str.length; i++){
        if (vowels.includes(str[i])) {
            result += 1
        }
    }

    return console.log(result);
}

vowelCounter("Hello my name is Tom");
