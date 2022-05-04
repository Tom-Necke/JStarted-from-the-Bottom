// * Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).

let books = [
    { title: "book1", author: "author1", alreadyRead: true },
    { title: "book2", author: "author2", alreadyRead: false },
    { title: "book3", author: "author3", alreadyRead: false },
    { title: "book4", author: "author4", alreadyRead: true },
    { title: "book5", author: "author5", alreadyRead: false }
];

// * Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".

books.forEach(ele => console.log(`${ele.title} by ${ele.author}`));

// * Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.' 

books.forEach(ele => ele.alreadyRead ? console.log(`You already read ${ele.title} by ${ele.author}`) : console.log(`You still need to read ${ele.title} by ${ele.author}`))