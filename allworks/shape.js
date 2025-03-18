class Shape {
    draw() {
        throw new Error("Метод draw() должен быть переопределён в подклассе.");
    }
}

class Rectangle extends Shape {
    draw() {
        console.log("Рисуем прямоугольник");
    }
}

class Circle extends Shape {
    draw() {
        console.log("Рисуем круг");
    }
}

const shapes = [new Rectangle(), new Circle(), new Rectangle(), new Circle()];

shapes.forEach(shape => shape.draw());