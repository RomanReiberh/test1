function greet(name){
    return 'Hello' + ' ' + (name) + '!'
}
greet('World')





function square(num){
    return num*num
}
square(6)





function isEven(num){
      return num % 2 === 0 ? "Even" : "Odd"
}
isEven(7)




function concatinate(name1,name2){
      return `${name1}, ${name2} !`
}
console.log(concatinate('Hello', 'World'))





const user = {
    sayHello: function(name) {
        return `Привет, ${name}! Добро пожаловать!`;
    }
}
console.log(user.sayHello ('Иван'))





const calculator = {
    add: function(num1, num2){
        return num1 + num2
    }
}
console.log(calculator.add(3,19))




const num = a => a*a
num(5)



var isEven = a => a % 2 === 0;
console.log(isEven(1954))




var pack =(name1,name2) => `${name1}, ${name2} !`
console.log(concatinate('Hello', 'World'))









const number = [];
for (let i = 1; i <= 10; i++) {
    number.push(i);
}
console.log(number);






function takeNumbers() {
    const numbers = [];
    for (let i = 1; i <= 10; i++) {
        numbers.push(i);
    }
     numbers.forEach(number => {
        console.log(number);
    });
}
takeNumbers()







const fruit =['Apple','Orange','Strawberry']
const searchStroke = 'Strawberry'






const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = numbers.length - 1; i >= 0; i--) {
    console.log(numbers[i]);
}





const filterNumbers = (arr) => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 5) {
            result.push(arr[i]);
        }
    }
    return result;
};





const students = [
    { name: 'Анна', grades: [85, 90, 92] },
    { name: 'Иван', grades: [88, 75, 96] },
    { name: 'Мария', grades: [78, 82, 94] },
  ];
  students.forEach(student => {
    const arrSt = student.grades.reduce((sum, grade) => sum + grade, 0) / student.grades.length;
    console.log(` ${student.name} ${arrSt.toFixed(2)}`);
});





function factorial(num){
    
    return
}





const sumArray = arr => arr.reduce((sum, num) => sum + num, 0);

console.log(sumArray([1, 2, 3, 4, 5]))




const numbers1 = [3,23,61,23,212,214,52]
const MaxNumbers = numbers1.sort((a,b)=>b-a)[0]
console.log(MaxNumbers)




function numdouble(arr){
    return arr.map(num => num * 2)
}
console.log(numdouble([2,12,52,23,4]));






const objects = [
    {name:'Иван'},
    {name:'Андрей'},
    {name:'Роман'}
]

function ist(arr, name){
    return arr.some(item => item.name === name)
}

console.log(ist(objects, 'Роман'));
console.log(ist(objects, 'Василий'));








const arr1 = ['name:', 'age:', 'job:'];
const arr2 = ['Roman', '28', 'Guide']
   
    function together(keys, values) {
        const result = {};
        for (let i = 0; i < keys.length; i++) {
            result[keys[i]] = values[i];
        }
        return result;
    }
    
    console.log(together(arr1, arr2));








const person = { name: 'Alice', age: 30, city: 'London' };
const selectedProperties = pickProperties(person, ['name', 'city']);
console.log(selectedProperties); // Выведет: { name: 'Alice', city: 'London' }








function pickProperties(obj, properties) {
    return properties.reduce((result, prop) => {
        if (prop in obj) {
            result[prop] = obj[prop];
        }
        return result;
    }, {});
}

console.log(pickProperties(person, ['name', 'age', 'city']));




function pickProperties(obj, items) {
	return items.reduce((acc, item) => {

  	if (obj[item]) {
    	acc[item] = obj[item];
    }

    return acc;
  }, {})

}


