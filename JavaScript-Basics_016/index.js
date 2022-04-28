// Write a JavaScript function to get humanized number with the correct suffix such as 1st, 2nd, 3rd or 4th.r
// console.log(humanize(1)); //"1st"
// console.log(humanize(20)); //"20th"
// console.log(humanize(302)); //"302nd"

function humanize(num) {
    if (num % 100 >= 11 && num % 100 <= 13) {
        return num + "th";
    } else if (num % 10 == 1) {
        return num + "st";
    } else if (num % 10 == 2) {
        return num + "nd";
    } else if (num % 10 == 3) {
        return num + "rd";
    } else {
        return num + "th";
    }
}

console.log(humanize(1));
console.log(humanize(20));
console.log(humanize(302));

// Write a JavaScript function to alphabetize a given string.
// Note : Alphabetize string : An individual string can be alphabetized. This rearranges the letters so they are sorted A to Z.
// console.log(alphabetize_string("United States"));
//"SUadeeinsttt"

const alphabetize_string = (str) => {
    let newArr = str.split("").sort().join("")
    return newArr
}

console.log(alphabetize_string("United States"));

// Write a JavaScript function to sort the following array of objects by title value.

var library = [
    {
        author: "Bill Gates",
        title: "The Road Ahead",
        libraryID: 1254
    },
    {
        author: "Steve Jobs",
        title: "Walter Isaacson",
        libraryID: 4264
    },
    {
      author: "Suzanne Collins",
      title: "Mockingjay: The Final Book of The Hunger Games",
      libraryID: 3245,
    },
  ];
  //sorted
  /*/* {
      author: "Suzanne Collins",
      libraryID: 3245,
      title:"Mockingjay:The Final Book of The Hunger Games"
    }, [object Object] {
      author: "Bill Gates",
      libraryID: 1254,
      title: "The Road Ahead"
    }, [object Object] {
      author: "Steve Jobs",
      libraryID: 4264,
      title: "Walter Isaacson"
    }]*/

function librarySort(acc, cur) {
    if (acc.title < cur.title) {
        return -1;
    } else if (acc.title > cur.title) {
        return 1;
    }
}

console.log(library.sort(librarySort));


  // Write a JavaScript function to fill an array with values (numeric, string with one character) on supplied bounds.
  // console.log(num_string_range("a", "z", 2));
  // ["a", "c", "e", "g", "i", "k", "m", "o", "q", "s", "u", "w", "y"]


  
  // Zodiac sign, write a function that tells the user his/her Zodiac sign. The user should enter only his birthday like dd-mm-yy
  // for farther information check https://en.wikipedia.org/wiki/Zodiac
  // Examples:
  // zodiac("14-02-2002")  -> Aquarius
  // zodiac("10-06-1984")  -> Gemini
  
  data = [
    { signName: "Not real day!", from: "0000" },
    { signName: "Capricorn", from: "0101" },
    { signName: "Aquarius", from: "0120" },
    { signName: "Pisces", from: "0220" },
    { signName: "Aries", from: "0321" },
    { signName: "Taurus", from: "0420" },
    { signName: "Gemini", from: "0521" },
    { signName: "Cancer", from: "0621" },
    { signName: "Leo", from: "0723" },
    { signName: "Virgo", from: "0823" },
    { signName: "Libra", from: "0923" },
    { signName: "Scorpio", from: "1023" },
    { signName: "Sagittarius", from: "1123" },
    { signName: "Capricorn", from: "1222" },
    { signName: "Not real day!", from: "1232" },
  ];


const zodiac = (date) => {
    let day = parseInt(date.slice(0, 2));
    let month = parseInt(date.slice(3, 5))

    if (month == 0 || day == 0) {
        return "not a real date";
    } else if (month >= 1 && month <= 2 && day >= 20 && day <= 19) {
        return "Aquarius";
    } else if (month >= 2 && month <= 3 && day >= 19 && day <= 20) {
        return "Pisces"
    } else if (month >= 3 && month <= 4 && day >= 21 && day <= 19) {
        return "Aries"
    } else if (month >= 4 && month <= 5 && day >= 20 && day <= 20) {
        return "Taurus"
    } 


}

        01234
console.log(zodiac("14-02-2002"));
zodiac("10-06-1984");







const numbersYo = [4, 3, 7, 32, 12, 5, 8, 4141, 12, 57, 2];

const sortNumbersYo = numbersYo.sort((a, b) => a < b ? 1 : -1)

console.log(sortNumbersYo);