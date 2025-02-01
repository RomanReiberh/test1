var colors = [];
colors.push("red", "green", "blue");

console.log(colors);




var numbers = [1 ,2];
numbers.push(3,4);

console.log(numbers);





let num1 = [1, 4, 2, 5];
let sum1 = 0;
num1.forEach((num2) => {
 sum += num2;
});
console.log(sum1);


var numberR = [1, 4, 2, 5];
numberR.forEach((number, index) => {
    console.log(`Result: ${number * index}`)
});





var ficus = ["apple", "orange", "ananas"];
var lengths = ficus.map((fruit) => fruit.length);
console.log(lengths)



var numberL = [4, 2, 7, 8];
numberL.map((number) => {
    console.log(`Result: ${number * number}`)
});




var people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 22 }
];

people.map((person) => {
    console.log(person.name)
});





var animals = ["cat", "dog", "rabbit"];
var change = animals.pop()
console.log(animals);


function positive(number) {
    return number >0
}
var close = [-3, 5, 12, 45 , -89];
var close1 = close.filter(positive);
console.log(close1);




function negative(number) {
    return number % 3 === 0
}
var close2 = [-3, 5, 12, 45 , -89];
var close3 = close.filter(negative);
console.log(close3);




var massiv = [4, 2, 5, 1, 3];

var massiv1 = massiv.sort(function(a,b) {
    if(a < b) return -1;
    return 1
});

console.log(massiv1);




var massiv2 = ["apple", "banana", "kiwi", "orange", "grape"];

var massiv3 = massiv2.sort(function(a,b) {
    if(a.length < b.length) return -1;
    return 1
});

console.log(massiv3);




var colors = ["red", "green", "blue"];
var newColors = colors.unshift("black", "white");

console.log(colors);
console.log(newColors);





var numbers22 = [5, 10, 15, 20];
var numik = numbers22.reduce(function(applicatore, currentValue) {
    return applicatore + currentValue;
}, 0);
console.log(numik);



var words = ["Hello", " ", "world", "!"];
var sumWords = words.reduce(function(applicatore, currentValue) {
    return applicatore +1
}, 0);

console.log(sumWords);



var words = ["Hello", " ", "world", "!"];
var sumWords = words.reduce(function(applicatore, currentValue) {
    return currentValue.trim() !== "" ? applicatore + 1 : applicatore;
}, 0);

console.log(sumWords);





var numericArray = [1, 2, 3, 4, 5];
var richtig = numericArray.filter(function(number) {
    return number % 2 === 0;
});

numericArray.reduce(function(applicatore, currentValue) {
 return applicatore + currentValue
}, 0);

console.log(richtig);





var nummericArray1 = [-2, 3, -5, 1, 4];

var filtered = nummericArray1.filter(function(num) {
    return num > 0;
});

var tasty = filtered.map(function(num) {
    return num ** 2;
});

var sorted = tasty.reduce(function(accumulator, currentValue) {
    let i = accumulator.findIndex(function(x) {
        return x > currentValue; 
    });
    if (i === -1) {
        accumulator.push(currentValue); 
    } else {
        accumulator.splice(i, 0, currentValue); 
    }
    return accumulator;
}, []);

console.log(sorted);



var numbers13 = [1, 2, -3, 4, 5];
var correct = numbers13.some(function(element) {
    return element < 0
}, 0);
console.log(correct);




var strings = ["apple", "banana", "orange", "watermelon"];
var bigString = strings.some(function(element) {
    return 10 < element.length
}, 0);
console.log(bigString);




var words = ["banana", "orange", "kiwi", "pear"];
var correctWord = words.some(function(element) {
    return element.includes("a")
});
console.log(correctWord);





var funtik = [3, 6, 9, 12];
var corFuntik = funtik.every(function(element) {
    return element % 3 === 0;
});
console.log(corFuntik);





var people = [
      { name: "Alice", age: 25 },
      { name: "Bob", age: 32 },
      { name: "Charlie", age: 28 }
    ];

    var agePeople = people.some(function(element) {
        return element.age > 28
    });
    console.log(agePeople);





function some(array, callback) {
for (let i = 0; i < array.length; i++) {
if (callback(array[i], i, array)) {
return true;
}}
return false;
}
