import { functionParams, functionReturnTypes, functionReturnTypesTwo } from "../examples/functionTypes/examples";
import hljs from 'highlight.js/lib/core';
import typescript from 'highlight.js/lib/languages/typescript';

hljs.registerLanguage('typescript', typescript);

const examples = [
    functionParams(),     // Page 1
    functionReturnTypes(), // Page 2
    functionReturnTypesTwo() // Page 3
];

let pageNumber = 0; // Start at page 1 (index 0)

function updateButtonVisibility() {
    const leftNavButton = document.querySelector('#leftNavButton');
    const rightNavButton = document.querySelector('#rightNavButton');
    
    if (leftNavButton) {
        // Hide left button on page 1
        (leftNavButton as HTMLElement).style.visibility = pageNumber === 0 ? 'hidden' : 'visible';
    }
    if (rightNavButton) {
        // Hide right button on page 3
        (rightNavButton as HTMLElement).style.visibility = pageNumber === examples.length - 1 ? 'hidden' : 'visible';
    }
}

function updateContent(example: any) {
    const cardTitle = document.querySelector('.card-title');
    const cardExplanation = document.querySelector('.cardExplanation');
    const cardCode = document.querySelector('#cardCode');

    if (cardTitle) cardTitle.textContent = example.title;
    if (cardExplanation) cardExplanation.textContent = example.explanation;
    if (cardCode) {
        cardCode.innerHTML = hljs.highlight(
            example.code.trim(),
            { language: 'typescript' }
        ).value;
    }
    
    updateButtonVisibility();
    console.log('Current page:', pageNumber + 1, 'of', examples.length);
}

// Event listener for left button
const leftNavButton = document.querySelector('#leftNavButton');
if (leftNavButton) {
    leftNavButton.addEventListener('click', () => {
        console.log('Left button clicked');
        try {
            if (pageNumber > 0) {
                pageNumber--;
                updateContent(examples[pageNumber]);
                console.log('Moved to page:', pageNumber + 1);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    });
}

// Event listener for right button
const rightNavButton = document.querySelector('#rightNavButton');
if (rightNavButton) {
    rightNavButton.addEventListener('click', () => {
        console.log('Right button clicked');
        try {
            if (pageNumber < examples.length - 1) {
                pageNumber++;
                updateContent(examples[pageNumber]);
                console.log('Moved to page:', pageNumber + 1);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    });
}

// Load initial example (page 1) and set initial button visibility
try {
    updateContent(examples[pageNumber]);
    updateButtonVisibility();
    console.log('Initial page loaded');
} catch (error) {
    console.error('Error loading initial page:', error);
}