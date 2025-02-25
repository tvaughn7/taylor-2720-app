import { functionParams, functionReturnTypes, functionReturnTypesTwo } from "../examples/functionTypes/examples";
import hljs from 'highlight.js/lib/core';
import typescript from 'highlight.js/lib/languages/typescript';

hljs.registerLanguage('typescript', typescript)

// Create array of examples
const examples = [
    functionParams(),
    functionReturnTypes(),
    functionReturnTypesTwo()
];
let currentIndex = 0;
let exampleCounter = 0;

// Get DOM elements
const leftNavButton = document.querySelector('#leftNavButton');
const rightNavButton = document.querySelector('#rightNavButton');
const cardTitle = document.querySelector('.card-title');
const cardExplanation = document.querySelector('.cardExplanation');
const cardCode = document.querySelector('#cardCode');

// Function to update content
function updateContent(example: any) {
    if (cardTitle) cardTitle.textContent = example.title;
    if (cardExplanation) cardExplanation.textContent = example.explanation;
    if (cardCode) {
    cardCode.innerHTML = hljs.highlight(example.code, {
        language: 'typescript'
    }).value;
}
}

// Event listener for left button
if (leftNavButton) {
    leftNavButton.addEventListener('click', () => {
        console.log('Left button clicked');
        try {
            exampleCounter --;
            currentIndex = (currentIndex - 1 + examples.length) % examples.length;
            updateContent(examples[currentIndex]);
            console.log('Loaded example:', examples[currentIndex]);
        } catch (error) {
            console.error('Error loading example:', error);
        }
    });
}

if (rightNavButton) {
    rightNavButton.addEventListener('click', () => {
        console.log('right button clicked');
        try {
            currentIndex = (currentIndex - 1 + examples.length) % examples.length;
            updateContent(examples[currentIndex]);
            console.log('Loaded example:', examples[currentIndex]);
        } catch (error) {
            console.error('Error loading example:', error);
        }
    });
}

// Load initial example
try {
    updateContent(examples[currentIndex]);
    console.log('Initial example loaded');
} catch (error) {
    console.error('Error loading initial example:', error);
}