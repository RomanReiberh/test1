const person = {
    name: "Roman", 
    age: 28, 

    myAge() {
        console.log(`Мне ${this.age} лет.`);
    }
};

person.myAge()







//const calculator = {
  //  result: 0,
   // 
   // add(a, b) {
   //     this.result = a + b;
   //     return this.result;
   // },
   /// 
   // multiply(a, b) {
   //     this.result = a * b;
   //     return this.result;
 //   }
//};

//console.log(calculator.add(2, 3));     
//console.log(calculator.multiply(4, 5)); 



document.getElementById("color").addEventListener("click", function () {
    this.style.backgroundColor = getRandomColor();
});

function getRandomColor() {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}




function Car(brend, model, year) {
    this.brend = brend;
    this.model = model;
    this.year = year;
  
    this.print = function() {
      console.log(`Brend: ${this.brend}, Model: ${this.model}, Year: ${this.year}`);
    };
  }
  
  var myCar = new Car('Audi', 'A4', 1998);
  myCar.print();





  function addNumbers(a, b) {
    this.results = a + b;
  }
  
 
  const obj = {};
  
 
  addNumbers.call(obj, 13, 77);
  
  console.log(obj.results);





  function divideNumbers(a, b) {
    this.results = a / b;
  }
  

  const obj1 = {};
  

  divideNumbers.apply(obj1, [48, 4]);
  

  console.log(obj1.results);





  function counter() {
    let count = 0; 
  
    return function() {
      count += 1; 
      console.log(count);
    };
  }
  
  const myCounter = counter();
  
  myCounter(); 
  myCounter(); 
  myCounter();
  myCounter();
  myCounter();
  myCounter();
  myCounter();
  myCounter();
  myCounter();