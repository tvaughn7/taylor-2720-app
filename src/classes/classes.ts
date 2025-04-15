import { ExampleCodeSnippet } from "../lib/classes/exampleCodeSnippet";
import hljs from 'highlight.js';

const section1 = document.querySelector('#section1');
const section2 = document.querySelector('#section2');
const section3 = document.querySelector('#section3');
const section4 = document.querySelector('#section4');
const section5 = document.querySelector('#section5');

const example1 = document.querySelector('#example1');
const example2 = document.querySelector('#example2');
const example3 = document.querySelector('#example3');
const example4 = document.querySelector('#example4');
const example5 = document.querySelector('#example5');

const observerOptions = {
    root: null, // Use the viewport as the root
    threshold: 0.45, // Trigger when 50% of the target is visible
    rootMargin: '0px'
};

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const section = entry.target as HTMLElement;
        const sectionId = section.id;
        const example = document.querySelector(`#${sectionId} > div`);
        const direction = section.dataset.class;

        if (entry.isIntersecting) {
            example?.classList.remove(direction!, 'opacity-0');
            example?.classList.add('transform-none');
        } else {
            example?.classList.remove('transform-none');
            example?.classList.add(direction!, 'opacity-0');
        }
    });
}, observerOptions);

document.querySelectorAll('section[data-class]').forEach(section => {
    sectionObserver.observe(section);
});

const classExample = new ExampleCodeSnippet('Class Example', 'A class is a blueprint for creating objects...', 
    `<pre><code class="language-typescript">class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}</code></pre>`
);

if (example1) example1.innerHTML = classExample.renderCodeSnippet();

const abstractClassExample = new ExampleCodeSnippet('Abstract Class Example',
    'An abstract class is a class that cannot be instantiated...',
    `<pre><code class="language-typescript">abstract class Shape {
    protected color: string = '';
    abstract getArea(): number;
    abstract getPerimeter(): number;
    getColor(): string {
        return this.color;
    }
}</code></pre>`
);

// Update the element selection logic
const example2Container = document.querySelector('#example2');
if (example2Container) {
    example2Container.innerHTML = abstractClassExample.renderCodeSnippet();
}

const inheritanceExample = new ExampleCodeSnippet('Inheritance Example',
    'Inheritance allows a class to inherit properties and methods from another class...',
    `<pre><code class="language-typescript">class Circle extends Shape {
    private radius: number;

    constructor(radius: number, color: string) {
        super();
        this.radius = radius;
        this.color = color;
    }

    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }

    getPerimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}</code></pre>`
);

if (example3) example3.innerHTML = inheritanceExample.renderCodeSnippet();

const encapsulationExample = new ExampleCodeSnippet('Encapsulation Example',
    'Encapsulation is the bundling of data and the methods that operate on that data...',
    `class Person {
    private name: string;
    private age: number;

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
}`, 
);

if (example4) example4.innerHTML = encapsulationExample.renderCodeSnippet();

const polymorphismExample = new ExampleCodeSnippet('Polymorphism Example',
    'Polymorphism allows objects of different classes to be treated as objects of a common base class or interface...',
    `<pre><code class="language-typescript">interface Animal {
    makeSound(): string;
}

class Dog implements Animal {
    makeSound(): string {
        return "Woof!";
    }
}

class Cat implements Animal {
    makeSound(): string {
        return "Meow!";
    }
}

// Both Dog and Cat can be treated as Animal types
const animals: Animal[] = [
    new Dog(),
    new Cat()
];

// Each animal makes its own unique sound
animals.forEach(animal => {
    console.log(animal.makeSound());
});</code></pre>`
);

if (example5) example5.innerHTML = polymorphismExample.renderCodeSnippet();
