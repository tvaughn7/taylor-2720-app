export function functionParams() {
    return {
        title: "Function Parameters in TypeScript",
        explanation: "TypeScript provides several ways to define function parameters, including required, optional, default, and rest parameters.",
        code: 
`// Required parameters
function greet(name: string): string {
    return "Hello, " + name;
}

// Optional parameters (?)
function printUserInfo(name: string, age?: number) {
    if (age) {
        return \`\${name} is \${age} years old\`;
    }
    return \`\${name}'s age is unknown\`;
}

// Default parameters
function createUser(name: string, role: string = "user") {
    return { name, role };
}

// Rest parameters
function sum(...numbers: number[]): number {
    return numbers.reduce((total, num) => total + num, 0);
}

// Function overloads
function getItem(id: number): number;
function getItem(name: string): string;
function getItem(value: any): any {
    return value;
}

// Object parameter with type
function printCoordinates(point: { x: number; y: number }) {
    console.log(\`X: \${point.x}, Y: \${point.y}\`);
}`
    }
}

export function functionReturnTypes() {
    return {
        title: "Function Return Types",
        explanation: "TypeScript functions can specify their return type explicitly.",
        code: `
// Explicit return types
function add(x: number, y: number): number {
    return x + y;
}

// Multiple return types
function getValue(): string | number {
    return Math.random() > 0.5 ? "string" : 42;
}

// Void return type
function logMessage(msg: string): void {
    console.log(msg);
}`
    };
}
export function functionReturnTypesTwo() {
    return {
        title: "Function Return Types (2)",
        explanation: "TypeScript functions can specify their return type explicitly.",
        code: `
// Explicit return types
function add(x: number, y: number): number {
    return x + y;
}

// Multiple return types
function getValue(): string | number {
    return Math.random() > 0.5 ? "string" : 42;
}

// Void return type
function logMessage(msg: string): void {
    console.log(msg);
}

// Never return type
function throwError(message: string): never {
    throw new Error(message);
}

// Function returning a Promise
function fetchData(url: string): Promise<string> {
    return fetch(url).then(response => response.text());
}

// Function returning an array
function getNumbers(): number[] {
    return [1, 2, 3, 4, 5];
}

// Function returning a tuple
function getTuple(): [string, number] {
    return ["hello", 42];
}
`
    };
}