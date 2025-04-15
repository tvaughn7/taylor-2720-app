// abstraction
abstract class Shape {
    protected color: string = ''; // Initialize the color property
    abstract getArea(): number;
    abstract getPerimeter(): number;
    getColor(): string {
        return this.color;
    }
}

// Inheritance
class Circle extends Shape {
    private radius: number;

    constructor(radius: number, color: string) {
        super(); // Fixed typo in super() call
        this.radius = radius;
        this.color = color;
    }

    getArea(): number { // Moved method inside class
        return Math.PI * this.radius * this.radius; // Fixed area calculation
    }

    getPerimeter(): number { // Moved method inside class
        return 2 * Math.PI * this.radius;
    }
}

// Polymorphism

class Rectangle extends Shape {
    private width: number;
    private height: number;

    constructor(width: number, height: number, color: string) {
        super();
        this.width = width;
        this.height = height;
        this.color = color;
    }

    getArea(): number {
        return this.width * this.height;
    }

    getPerimeter(): number {
        return 2 * (this.width + this.height);
    }
}

const shapes: Shape[] = [new Circle(5, 'red'), new Rectangle(10, 20, 'blue')];

shapes.forEach(shape => {
    console.log(`Area: ${shape.getArea()}`);
    console.log(`Perimeter: ${shape.getPerimeter()}`);
    console.log(`Color: ${shape.getColor()}`);
});

// Encapsulation

class Person {
    private name: string; // private means this property is only accessible within this class
    private age: number; // private means this property is only accessible within this class

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getName(): string {
        return this.name;
    }

    getAge(): number {
        return this.age;
    }

    setName(name: string): void {
        this.name = name;
    }
    setAge(age: number): void {
        this.age = age;
    }

    greet(): string {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

const alice = new Person('Alice', 30);
console.log(alice.greet()); // Hello, my name is Alice and I am 30 years old.
