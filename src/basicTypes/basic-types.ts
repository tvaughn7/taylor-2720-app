console.log('Hello World I am a basic type-script file');

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

// Wrong way - Type Error
// person[3] = 'Bob';     // Error: Tuple type '[string, number]' has no element at index '3'
// person[1] = 'test';    // Error: Type 'string' is not assignable to type 'number'


/*------------------------------------------------------------------------*/




