class Counter {
    static count = 0;

    static increment() {
        this.count += 1;
    }

    static decrement() {
        this.count -= 1;
    }
}

console.log(Counter.count);
Counter.increment();
console.log(Counter.count);
Counter.decrement();
console.log(Counter.count);
Counter.increment();
Counter.increment();





class Configuration {
    static settings = {};

    static getSetting(key) {
        return this.settings[key];
    }

    static setSetting(key, value) {
        this.settings[key] = value;
    }
}

Configuration.setSetting('theme', 'dark');
console.log(Configuration.getSetting('theme'));

Configuration.setSetting('language', 'ru');
console.log(Configuration.getSetting('language'));






class MathOperations {
    static PI = 3.14; 
    static E = 2.7182;  

    static calculateCircleArea(radius) {
        return this.PI * radius * radius; 
    }

    static calculateExponentialPower(base, exponent) {
        return Math.pow(base, exponent) * this.E; 
    }
}

console.log(MathOperations.calculateCircleArea(7)); 
console.log(MathOperations.calculateExponentialPower(4, 3));