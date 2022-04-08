//Schreibe eine Funktion, die zwei Parameter annimmt, einen Integer (eine Ganzzahl) und einen String. Der Integer soll kleiner als oder gleich die String-Länge. Die Funktion gibt einen neuen String zurüch, der aus den zufälligen Zeichen des angegebenen Strings besteht und seine Länge gleich dem Wert des angegebenen Integers.
//Beispiel: getRandomStrig(4, "randomWord"); => //Z. B. "ordr", "doWo", "aoao", "dWor" ...usw.
//Hinweis: Die Funktion getRandomInt() kann in deiner Funktion verwendet werden.



const getRandomStrig = (num, str) => {
    let result = "";
    for (let i = 0; i <= num; i++) {
        result += str[Math.floor(Math.random() * str.length + 1)]
    }
    return console.log(result);
};
getRandomStrig(4, "randomWord")
