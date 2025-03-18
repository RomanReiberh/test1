class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    getArea() {
        return Math.PI * this.radius ** 2;
    }

    getCircumference() {
        return 2 * Math.PI * this.radius;
    }
}


const circle1 = new Circle(4);

console.log("Площадь круга:", circle1.getArea());
console.log("Длина окружности:", circle1.getCircumference());








class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }

    getPerimeter() {
        return 2 * (this.width + this.height);
    }
}


const rectangle1 = new Rectangle(8, 4);


console.log("Площадь прямоугольника:", rectangle1.getArea());
console.log("Периметр прямоугольника:", rectangle1.getPerimeter());









class Shape {
    calculateArea() {
        return 0;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    calculateArea() {
        return this.width * this.height
    }
}



class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius
    }

    calculateArea() {
        return Math.PI * this.radius ** 2;
    }
}



const rectangle = new Rectangle(8, 4);
const circle = new Circle(5);



console.log("Площадь прямоугольника:", rectangle.calculateArea());
console.log("Площадь круга:", circle.calculateArea());










class Transport {
    move() {
        return 0;
    }
}

class Car extends Transport {
    move() {
        return "Машина едет по дороге";
    }
}

class Bicycle extends Transport {
    move() {
        return "Велосипед едет по велодорожке";
    }
}


const car = new Car();
const bicycle = new Bicycle();


console.log("Движение машины:", car.move());
console.log("Движение велосипеда:", bicycle.move());











class Person {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        console.log("Ошибка: Изменение имени запрещено.");
    }
}


const person = new Person("Роман");

console.log("Имя:", person.name);

person.name = "Иван";





class Person {
    #name;

    constructor(name) {
        this.#name = name;
    }

    get name() {
        return this.#name;
    }

    set name(newName) {
        console.log("Ошибка: Изменение имени запрещено.");
    }
}

const person = new Person("Роман");

console.log("Имя:", person.name);

person.name = "Иван";






class Car {
    #milage;  

    costructor(milage) {
        this.milage = milage;
    }

    get milage() {
        return this.#milage;
    }

    set milage(value) {
        if (value < 0) {
            console.log("Ошибка: Пробег не может быть отрицательным.");
        } else {
            this.#milage = value;
        }
    }
}

const myCar = new Car(10000);

myCar.milage = 160000;
myCar.milage = -500










class Calculator {
    static add(a, b) {
        return a + b
    };
};



console.log(Calculator.add(5, 6));
console.log(Calculator.add(32, 49));










class RandomNumberGenerator {
    static generate(min, max) {
        return Math.floor(Math.random() * (max - min +1)) + min;
    };
};


console.log(RandomNumberGenerator.generate(1, 1000));








class StringUtils {
    static reverse(str) {
        return str.split('').reverse().join('');
    }
}

console.log(StringUtils.reverse("теропод"));
console.log(StringUtils.reverse("утконос"));




class StringUtils {
    static reverse(str) {
        let reversedStr = "";
        for (let i = str.length - 1; i >= 0; i--) {
            reversedStr += str[i];
        }
        return reversedStr;
    }
}

console.log(StringUtils.reverse("ватрушка"));
console.log(StringUtils.reverse("барабулька"));











class MathUtils {
    static getMax(numbers) {
        return Math.max(...numbers);
    }
}

console.log(MathUtils.getMax([10, 5, 8, 20, 3]));
console.log(MathUtils.getMax([-2, -5, -1, -10]));






class MathUtils {
    static getMax(numbers) {
        if (numbers.length === 0) {
            throw new Error("Массив не может быть пустым");
        }

        let max = numbers[0];
        for (let i = 1; i < numbers.length; i++) {
            if (numbers[i] > max) {
                max = numbers[i];
            }
        }
        return max;
    }
}

console.log(MathUtils.getMax([10, -5, 8, 20, -3]));
console.log(MathUtils.getMax([-2, 5, -1, 10, 13]));
