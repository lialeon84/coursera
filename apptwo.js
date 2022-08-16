// function meal(animal) {
//     animal.food = animal.food + 10;
// }

const { boolean } = require("yargs");

// var dog = {
//     food: 10
// };
// meal(dog);
// meal(dog);

// console.log(dog.food);

// function two() {
//     return 2;
// }

// function one() {
//     return 1;
// }

// function calculate(initialValue, incrementValue) {
//     return initialValue() + incrementValue() + incrementValue();
// }

// console.log(calculate(two, one));

// Task 1: Code a Person class

// Task 1: Code a Person class
// class Person {
//     constructor(name = "Tom", age = 20, energy = 100) {
//         this.name = name;
//         this.age = age;
//         this.energy = energy;
//     }
//     sleep() {

//         this.energy += 10;
//         console.log("energy:", this.energy)

//     }
//     doSomethingFun() {
//         this.energy -= 10;
//     }
// }

// Task 2: Code a Worker class
// class Worker extends Person {
//     constructor(name, age, energy, xp = 0, hourlyWage = 10) {
//         super(name, age, energy);
//         this.xp = xp;
//         this.hourlyWage = hourlyWage;
//     }
//     goToWork() {

//         this.xp += 10;


//     }
// }
// Task 3: Code an intern object, run methods
// function intern() {
//     var intern = new Worker("Bob", 21, 110, 0, 10);

//     intern.goToWork();
//     console.log(intern)
//     return intern;
// }
// intern();
// Task 4: Code a manager object, methods
// function manager() {
//     var manager = new Worker("Alice", 30, 120, 100, 30)
//     manager.doSomethingFun();
//     console.log(manager)
//     return manager;
// }
// manager();

//
// class Cake {
//     constructor(lyr) {
//         this.layers = lyr + 1;
//     }
// }

// var result = new Cake(1);
// console.log(result.layers);

//
// class Animal {
//     constructor(lg) {
//         this.legs = lg;
//     }
// }

// class Dog extends Animal {
//     constructor() {
//         super(4);
//     }
// }

// var result = new Dog();
// console.log(result.legs);

//
// class Animal {

// }

// class Cat extends Animal {
//     constructor() {
//         super();
//         this.noise = "meow";
//     }
// }

// var result = new Animal();
// console.log("Cat:", result.noise);


//
class PersonTwo {
    sayHello() {
        console.log("Hello");
    }
}

class Friend extends PersonTwo {
    sayHello() {
        console.log("Hey");
    }
}

var result = new Friend();
result.sayHello();
console.log(result)


///
class Train {
    constructor(color, lightsOn) {
        this.color = color;
        this.lightsOn = lightsOn;
    }
    toggleLights() {
        this.lightsOn = !this.lightsOn;
    }
    lightsStatus() {
        console.log('Lights on?', this.lightsOn);
    }
    getSelf() {
        console.log(this);
    }
    getPrototype() {
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}

class HighSpeedTrain extends Train {
    constructor(passengers, highSpeedOn, color, lightsOn) {
        super(color, lightsOn);
        this.passengers = passengers;
        this.highSpeedOn = highSpeedOn;
    }
    toggleHighSpeed() {
        this.highSpeedOn = !this.highSpeedOn;
        console.log('High speed status:', this.highSpeedOn);
    }
    toggleLights() {
        super.toggleLights();
        super.lightsStatus();
        console.log('Lights are 100% operational.');
    }
}

var myFirstTrain = new Train('red', false);
console.log(myFirstTrain); // Train {color: 'red', lightsOn: false}
var mySecondTrain = new Train('blue', false);
var myThirdTrain = new Train('blue', false);

var train4 = new Train('red', false);
train4.toggleLights(); // undefined
train4.lightsStatus(); // Lights on? true
train4.getSelf(); // Train {color: 'red', lightsOn: true}
train4.getPrototype(); // {constructor: f, toggleLights: f, ligthsStatus: f, getSelf: f, getPrototype: f}

var train5 = new Train('blue', false);
var highSpeed1 = new HighSpeedTrain(200, false, 'green', false);

train5.toggleLights(); // undefined
train5.lightsStatus(); // Lights on? true
highSpeed1.toggleLights(); // Lights on? true, Lights are 100% operational.

//

var clothingItem = {
    price: 50,
    color: 'beige',
    material: 'cotton',
    season: 'autumn'
}

for (key of Object.keys(clothingItem)) {
    console.log(key, ":", clothingItem[key])
}

// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']

function logDairy() {
    for (key of Object.keys(dairy)) {
        console.log(dairy[key])
    }
}
logDairy();

// Task 2
const animal = {

    canJump: true

};

const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;

function birdCan() {
    for (key of Object.keys(bird)) {
        console.log(key, ":", bird[key])
    }
}
birdCan();

// Task 3

function animalCan() {
    for (prop in bird) {
        console.log(prop)
    }
}
animalCan();


//The forEach() method

//Arrays in JavaScript come with a handy method that allows you to loop over each of their members. 

const fruits = ['kiwi', 'mango', 'apple', 'pear'];

function appendIndex(fruit, index) {
    console.log(`${index}. ${fruit}`)
}
fruits.forEach(appendIndex);

const veggies = ['onion', 'garlic', 'potato'];
veggies.forEach(function(veggies, index) {
    console.log(`${index}. ${veggies}`);
});

const nums = [0, 10, 20, 30, 40, 50];
nums.filter(function(num) {
    if (num > 20) {
        console.log(num)
    }
})

var ages = [0, 10, 20, 30, 40, 50]
    .map(ages => ages / 10)

console.log(ages)

const results = [];
const drone = {
    speed: 100,
    color: 'yellow'
}
const droneKeys = Object.keys(drone);
droneKeys.forEach(function(key) {
    results.push(key, drone[key])
})
console.log(results)

//Set filters dups
let bestBoxers = new Map();
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");

console.log(bestBoxers);

const repetitiveFruits = ['apple', 'pear', 'apple', 'pear', 'plum', 'apple'];
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits);

const fruitsTwo = ['apple', 'pear', 'plum'];
const berries = ['blueberry', 'strawberry'];
const fruitsAndBerries = [...fruitsTwo, ...berries] // concatenate
console.log(fruitsAndBerries); // outputs a single array

const flying = { wings: 2 }
const car = { wheels: 4 }
const flyingCar = {...flying, ...car }
console.log(flyingCar) // {wings: 2, wheels: 4}

// Add new members to arrays without using the push() method

let veggiesTwo = ['onion', 'parsley'];
veggiesTwo = [...veggiesTwo, 'carrot', 'beetroot'];
console.log(veggiesTwo);

//Copy either an object or an array into a separate one
const car1 = {
    speed: 200,
    color: 'yellow'
}
const car2 = {...car1 }

car1.speed = 201

console.log(car1.speed, car2.speed)

//You can copy an array into a completely separate array, also using the spread operator, like this:

const fruits1 = ['apples', 'pears']
const fruits2 = [...fruits]
fruits1.pop()
console.log(fruits1, "not", fruits2)

const meal = ["soup", "steak", "ice cream"]
let [starter] = meal;
console.log(starter);

let food = "Chocolate";
console.log(`My favourite food is ${food}`);

let obj = {
    key: 1,
    value: 4
};

let output = {...obj };
output.value -= obj.key;

console.log(output.value);

// function count(...basket) {
//     console.log(basket.length)
// }

// count(10, 9, 8, 7, 6);

// let answer = prompt('What is your name?');
// if (typeof(answer) === 'string') {
//     var h1 = document.createElement('h1')
//     h1.innerText = answer;
//     document.body.innerText = "";
//     document.body.appendChild(h1);
// }


// var h1 = document.createElement('h1')
// h1.innerText = "Type into the input to make this text change"

// var input = document.createElement('input')
// input.setAttribute('type', 'text')

// document.body.innerText = '';
// document.body.appendChild(h1);
// document.body.appendChild(input);

// input.addEventListener('change', function() {
//     h1.innerText = input.value
// })

let cat = "meow"
let dog = cat
console.log(dog)

function scopeTest() {
    var y = 44;

    console.log(x);
}

var x = 33;
scopeTest();

class Cake {
    constructor(lyr) {
        this.layers = lyr;
    }

    getLayers() {
        return this.layers;
    }
}

class WeddingCake extends Cake {
    constructor() {
        super(2);
    }

    getLayers() {
        return super.getLayers() * 5;
    }
}

var result = new WeddingCake();
console.log(result.getLayers());

const [a, b] = [1, 2, 3, 4]
console.log([a, b])

function count(...food) {
    console.log(food.length)
}

count("Burgers", "Fries", null);


function apptwo(val) {
    return val + 5;
}
module.exports = apptwo;

function add(a, b) {
    return a + b;
}
module.exports = add;

// Given variables
const dishData = [{
        name: "Italian pasta",
        price: 9.55
    },
    {
        name: "Rice with veggies",
        price: 8.65
    },
    {
        name: "Chicken with potatoes",
        price: 15.55
    },
    {
        name: "Vegetarian Pizza",
        price: 6.45
    },
]
const tax = 1.20;

// Implement getPrices()
function getPrices(taxBoolean) {

    for (var i = 0; i < dishData.length; i++) {
        //var finalPrice;

        if (taxBoolean == true) {
            var finalPrice = dishData[i].price * tax;

        } else if (taxBoolean == false) {
            var finalPrice = dishData[i].price;
        } else {
            console.log("You need to pass a boolean to the getPrices call!")
            return taxBoolean;
        }

        console.log("Dish: " + dishData[i].name + " " + "Price: $" + finalPrice)
    }
}
getPrices(true);

function getDiscount(taxBoolean, guests) {
    getPrices(taxBoolean);
    var condition = typeof(guests) == 'number' && guests > 0 && guests < 30;
    if (condition == true) {
        var discount = 0;
        if (guests < 5) {
            discount = 5;
        } else if (guests >= 5) {
            discount = 10;
        }
        console.log('Discount is: $' + discount);
    } else {
        console.log('The second argument must be a number between 0 and 30');

    }
}

getDiscount(true, 2)
getDiscount(false, 10)

const d = 10;
const e = 5;
if (d == 7 || e == 5) {
    console.log("Green");
} else {
    console.log("Blue");
}

var x = true;
x = 23;
console.log(x);


var result = 0;

var i = 4;
while (i > 0) {
    result += 2;
    i--;
}

console.log(result);

function addTwo(a, b) {
    return a + b
}
console.log(addTwo(5, "10"))


// class Animal {

// }

// class Dog extends Animal {
//     constructor() {
//         this.noise = "bark";
//     }

//     makeNoise() {
//         return this.noise;
//     }
// }

// class Wolf extends Dog {
//     constructor() {
//         super();
//         this.noise = "growl";
//     }
// }

// var result = new Wolf();
// console.log(result.makeNoise());