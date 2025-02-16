
/*Basic types in TypeScript
- Boolean
- Number
- String
- Array
- Tuple
- Enum
- Any
- Void
- Null and Undefined
- Never
- Object
*/



// Example of number type 
let decimal: number = 10;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let float: number = 3.14;
let negative: number = -10;

/*------------------------------------------------------------------------*/

// Basic arithmetic
let sum = decimal + hex;
let diff = decimal - hex;

/*------------------------------------------------------------------------*/

// Eample of string type
let firstName: string = 'John';
let lastName: string = 'Doe';
let fullName: string = firstName + ' ' + lastName;

/*------------------------------------------------------------------------*/

// Template literal (backtick)
let greeting: string = `Hello, my name is ${fullName}`;
let multiLine: string = `This is a`;

/*------------------------------------------------------------------------*/

// Example of boolean type
let isDone: boolean = false;
let isTrue: boolean = true;

/*------------------------------------------------------------------------*/

// Example of unknown type
let notSure: unknown = 4;
notSure = 'maybe a string instead';
notSure = false;

/*------------------------------------------------------------------------*/

// Must check type before using unknown
let maybeString: string;
if (typeof notSure === 'string') {
	maybeString = notSure;
	console.log(maybeString);
}

/*------------------------------------------------------------------------*/

// Example of object type
let user: { name: string; age: number; email: string } = {
    name: 'John Smith',
    age: 25,
    email: 'john@example.com'
};

/*------------------------------------------------------------------------*/

// Using interface for better object type definition
interface Employee {
    id: number;
    role: string;
    department: string;
}

let employee: Employee = {
    id: 1001,
    role: 'Developer',
    department: 'IT'
};

/*------------------------------------------------------------------------*/

// Example of Array types
// Using square bracket syntax
let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ['Alice', 'Bob', 'Charlie'];

// Using generic Array type
let scores: Array<number> = [85, 92, 78, 90];
let fruits: Array<string> = ['Apple', 'Banana', 'Orange'];

// Mixed type array using union
let mixed: (string | number)[] = [1, 'two', 3, 'four'];

/*------------------------------------------------------------------------*/

// Example of Tuple types
let person: [string, number] = ['John', 25];
let employeeTuple: [number, string, boolean] = [1, 'Alice', true];

// Accessing tuple elements
console.log(person[0]);    // Output: John (string)
console.log(person[1]);    // Output: 25 (number)



/*------------------------------------------------------------------------*/

// Basic Numeric Enum
enum UserRole {
    Admin,      // 0
    Editor,     // 1
    Viewer      // 2
}

// String Enum
enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
}

// Using enums in functions
function checkUserAccess(role: UserRole): boolean {
    return role === UserRole.Admin;
}

/*------------------------------------------------------------------------*/

// The any type in TypeScript should be used sparingly as it bypasses TypeScript's type checking. Here's an explanation with examples to add to your basic-types.ts file:

// The 'any' type
let flexibleVar: any = 4;
flexibleVar = "string";    // OK
flexibleVar = false;       // OK
flexibleVar = {};         // OK

// Example where 'any' is useful - working with dynamic data
function processExternalData(data: any) {
    console.log(data.someProperty); // No TypeScript errors, but might fail at runtime
}

/*------------------------------------------------------------------------*/


// The void type
// Used primarily for functions that don't return a value
function logMessage(message: string): void {
    console.log(message);
    // No return statement needed
}

// void in arrow functions
const printName = (name: string): void => {
    console.log(`Hello, ${name}`);
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
}

/*------------------------------------------------------------------------*/


// null and undefined types
// These are subtypes of all other types by default unless strictNullChecks is enabled

// Using null
let nullValue: null = null;
let numberOrNull: number | null = null; // Union type
let stringOrNull: string | null = "hello";
stringOrNull = null; // OK

// Using undefined
let undefinedValue: undefined = undefined;
let numberOrUndefined: number | undefined; // Variable declared but not initialized
console.log(numberOrUndefined); // Output: undefined

// Practical example with optional parameters
function printUserName(name?: string) {
    // name is of type string | undefined
    console.log(name ?? "Anonymous");
}

// Function returning undefined
function findUser(id: number): string | undefined {
    // Simulating database lookup
    return id === 1 ? "John" : undefined;
}

// Null check example
function processUser(user: string | null) {
    if (user === null) {
        console.log("No user provided");
        return;
    }
    console.log(`Processing user: ${user}`);
}

/*------------------------------------------------------------------------*/

// The never type
// Represents values that never occur - used for functions that:
// 1. Never return (throw errors)
// 2. Have infinite loops
// 3. Are unreachable code paths

// Function that throws error
function throwError(message: string): never {
    throw new Error(message);
}

// Function with infinite loop
function infiniteLoop(): never {
    while (true) {
        // Some code
    }
}

// Example with exhaustive checking
type Shape = "circle" | "square" | "triangle";

function processShape(shape: Shape) {
    switch (shape) {
        case "circle":
            console.log("Processing circle");
            break;
        case "square":
            console.log("Processing square");
            break;
        case "triangle":
            console.log("Processing triangle");
            break;
        default:
            // This code should never be reached if all cases are handled
            const exhaustiveCheck: never = shape;
            break;
    }
}

/*------------------------------------------------------------------------*/

// Boolean Type Examples
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
}

