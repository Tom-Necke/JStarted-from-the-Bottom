// Creat a constructor function that receive product details (productName,prise,inventory) thin build a method to display this data in clear outputted form
// build two product using your constructor function
// i.e : (Pepsi,2.33,2232) -> Form item Pepsi selling prise 2.33€. we have 2232 in our store

class Drink {
    constructor(name, price, stored) {
        this.name = name;
        this.price = price;
        this.stored = stored;
        this.display = function () {
            return `Form item ${this.name} selling prise ${this.price}€. we have ${this.stored} in our store`
        }
    }
}

const pepsi = new Drink("Pepsi", 2.33, 2232);

console.log(pepsi.display());

// get & set, create a car object that uses getter and setter method to get and set the following (modelName,modelNumber,enginCapacity)
// first get the data
// then set the data
