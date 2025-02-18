
export function basicTypesNumber(){
    return{
        title: "Basic Types in TypeScript",
        explanation: "This section covers basic types in TypeScript. Here you see examples of the number and string data types.",
        code: `
// Example of number type 
let decimal: number = 10;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let float: number = 3.14;
let negative: number = -10;

// Basic arithmetic
let sum = decimal + hex;
let diff = decimal - hex;


        `}
}

export function basicTypesString(){
    return{
        title: "String Types in TypeScript",
        explanation: "String types in TypeScript represent textual data. They can be created using single quotes (''), double quotes (\"\"), or template literals (``) for multi-line strings and string interpolation.",
        code: `

 // Eample of string type
let firstName: string = 'John';
let lastName: string = 'Doe';
let fullName: string = firstName + ' ' + lastName;

`
    }
}

export function arrayTypesExample(){
    return{
        title: "Array Types in TypeScript",
        explanation: "This section covers array types in TypeScript. Here you see examples of the number and string data types.",
        code: `// Example of Array types`
    }
}

export function basicTypesBoolean(){
    return{
        title: "Boolean Types in TypeScript",
        explanation: "This section covers boolean types in TypeScript. Here you see examples of the number and string data types.",
        code: 
        `// Boolean Type Examples
let isActive: boolean = true;

// Boolean expressions
let isGreater: boolean = 10 > 5;
let isEqual: boolean = "hello" === "hello";

// Boolean in functions
function isEven(num: number): boolean {
    return num % 2 === 0;
}

// Boolean as function parameters
function toggleStatus(currentStatus: boolean): boolean {
    return !currentStatus;
}`
    }

}

export function specialTypes(){
    return{
        title: "Special Types in TypeScript",
        explanation: "This section covers special types in TypeScript. Here you see examples of the number and string data types.",
        code: `// The any type in TypeScript should be used sparingly as it bypasses TypeScript's type checking. Here's an explanation with examples to add to your basic-types.ts file:

// The 'any' type
let flexibleVar: any = 4;
flexibleVar = "string";    // OK
flexibleVar = false;       // OK
flexibleVar = {};         // OK

// Example where 'any' is useful - working with dynamic data
function processExternalData(data: any) {
    console.log(data.someProperty); // No TypeScript errors, but might fail at runtime
}`
    }
}

export function arrayTypes(){
    return{
        title: "Array Types in TypeScript",
        explanation: "This section covers special types in TypeScript. Here you see examples of the number and string data types.",
        code: 
        `// Example of Array types
// Using square bracket syntax
let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ['Alice', 'Bob', 'Charlie'];

// Using generic Array type
let scores: Array<number> = [85, 92, 78, 90];
let fruits: Array<string> = ['Apple', 'Banana', 'Orange'];

// Mixed type array using union
let mixed: (string | number)[] = [1, 'two', 3, 'four'];`
    }
}

export function tupleTypes(){
    return{
        title: "Tuple Types in TypeScript",
        explanation: "This section covers tuple types in TypeScript. Here you see examples of the number and string data types.",
        code: 
        `// Example of Tuple types
let person: [string, number] = ['John', 25];
let employeeTuple: [number, string, boolean] = [1, 'Alice', true];

// Accessing tuple elements
console.log(person[0]);    // Output: John (string)
console.log(person[1]);    // Output: 25 (number)

// Wrong way - Type Error
// person[3] = 'Bob';     // Error: Tuple type '[string, number]' has no element at index '3'
// person[1] = 'test';    // Error: Type 'string' is not assignable to type 'number'
`
    }
}

// function for null types
export function nullTypes(){
    return{
        title: "Null Types in TypeScript",
        explanation: "This section covers null types in TypeScript. Here you see examples of the number and string data types.",
        code: `// // The void type
// Used primarily for functions that don't return a value
function logMessage(message: string): void {
    console.log(message);
    // No return statement needed
}

// void in arrow functions
const printName = (name: string): void => {
    console.log('Hello, ' + name);
}

// void variable (rarely used)
let unusable: void = undefined;
// Note: You can only assign undefined or null (if strictNullChecks is false)

// Example of incorrect usage
// let voidVar: void = "Hello";  // Error: Type 'string' is not assignable to type 'void'

// Common use case with callbacks
function processWithCallback(value: number, callback: () => void) {
    // Process the value
    console.log(value);
    // Execute callback
    callback();
}`   
    }
}