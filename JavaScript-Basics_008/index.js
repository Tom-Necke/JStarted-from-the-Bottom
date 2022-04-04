// write a function that greet you :)

const userData = process.argv.splice(2)

function greetMe(x) {
    result = `Hallo ${x}`
    return console.log(result);
}

greetMe(userData);

// greet all

const greetAll = (names) => {
    for (let i = 0; i < names.length; i++){
        console.log(`Hallo ${names[i]}`);
    }
}

greetAll(userData);