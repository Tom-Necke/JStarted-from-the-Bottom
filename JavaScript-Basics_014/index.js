// Counting Letters. Create a function that counts the number of occurrences of each letter in a string. Return an object with key pair values of letters and the number of occurrences for each letter.
// Example:
// countLetters("tree") ➞ {t: 1, r: 1, e: 2}

const countLetters = (str) => {
    let result = {};
    for (let i = 0; i < str.length; i++) {
      result[str[i]] = result[str[i]] + 1 || 1;
    }
    return console.log(result);
};
  
countLetters("tree");
countLetters("Hallo");

