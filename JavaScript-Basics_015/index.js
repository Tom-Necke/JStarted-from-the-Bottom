// The Recipe Card
// Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
// On separate lines (one console.log statement for each), log the recipe information so it looks like:
// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa

const recipe = {
    name: "Mole",
    serves: 2,
    ingredients: ["cinnamon", "cumin", "cocoa"]
}

console.log(recipe.name);
console.log('Serves: ' + recipe.serves);
console.log('Ingredients:');
for (let i = 0; i < recipe.ingredients.length; i++) {
    console.log(recipe.ingredients[i]);
}

// opt 2

const recipe2 = {
  name: "Mole",
  serves: 2,
  ingredients: ["cinnamon", "cumin", "cocoa"]
}

console.log(recipe2.name);
console.log(`Serves: ${recipe2.serves}`);
console.log(`Ingredients:`);
for (const element of recipe2.ingredients) {
  console.log(element);
}

// The Reading List
// Keep track of which books you read and which books you want to read!
// Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
// Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
// Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'


const books = [
    {title: "The Hobbit",
     author: "J.R.R. Tolkien",
     alreadyRead: true
    },
    {title: "buch 2",
    author: "unbekannter author",
    alreadyRead: false
    }];
  
  for (let i = 0; i < books.length; i++) {
    let book = books[i];
    let bookInfo = book.title + " by " + book.author;
    if (book.alreadyRead) {
      console.log("You already read " + bookInfo);
    } else {
      console.log("You still need to read " + bookInfo);
    }
  }

// opt 2

  const books2 = [
    {
      title: "book1",
      author: "author1",
      read: true
    },
    {
      title: "book2",
      author: "author2",
      read: false
    }
  ]
  
  for (const book of books2) {
    console.log(`${book.title} by ${book.author}`);
  }

// Get Names. Create a function that takes an array of objects containing students' names e.g. {name: "John"}, and returns an array of just student names.
// Example:
// getNames([{ name: "Jane" },
//        { name: "Jack" },
//        { name: "John" }
//    ])
// ➞ ["Jane", "Jack", "John"]


const getNames = (arr) => {
    let result = []
    for (let i = 0; i < arr.length; i++){
        result.push(arr[i].name)
    }
    return console.log(result);
}

getNames([{ name: "Jane" },
       { name: "Jack" },
       { name: "John" }
])

// Create a function that returns an object has following output, try this one in Advance array methods :muskel::hautton-2:
// Examples:
// ABC -> { A: 1, B: 1, C: 1 } QQQ -> { Q: 3}

const countLetter = (str) => {
    const arr = str.split("");
    return arr.reduce((acc, cur) => {
      acc[cur] = acc[cur] ? acc[cur] +1 : 1;
      return acc;
    }, {});
  };
console.log(countLetter("ichbineinsehrlangeswortlol"));

// Scrabble. Write a program that, given an array of scrabble tiles, counts the maximum score that a player can earn from the tiles in their hand.
// Example:
// [ { tile: "N", score: 1 }, { tile: "K", score: 5 }, { tile: "Z", score: 10 }, { tile: "X", score: 8 }, { tile: "D", score: 2 }, { tile: "A", score: 1 }, { tile: "E", score: 1 } ]

const scrabble = [
    { tile: "N", score: 1 },
    { tile: "K", score: 5 },
    { tile: "Z", score: 10 },
    { tile: "X", score: 8 },
    { tile: "D", score: 2 },
    { tile: "A", score: 1 },
    { tile: "E", score: 1 },
];
  
const sumOfScore = (arr) => arr.reduce((acc, cur) => acc + cur.score, 0);
console.log(sumOfScore(scrabble));
