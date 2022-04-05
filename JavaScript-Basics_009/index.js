// The Coffee Company

function iDoCoffee() {
    let milk = iHaveMilk();
    let sweetener = iHaveSweetener();
    let eis = iHaveEis();
    let spoon = iHaveSpoon();

    return `your coffee with ${milk} ${sweetener} ${eis} and a ${spoon} is ready.`
}

const iHaveMilk = () => `Milk`;
const iHaveSweetener = () => `Something sweet`;
const iHaveEis = () => `Eis`;
const iHaveSpoon = () => `Spoon` 

console.log(iDoCoffee());

// map 

const names = ["Ali", "Nancy", "Olga", "Steel"];
const greetingArr = names.map((name, i) => `Hey ${name} your index num is ${i}`)

console.log(greetingArr);