import{basicTypesExample, arrayTypesExample, specialTypesExample} from './basic-types';
import hljs from 'highlight.js/lib/core';
import typescript from 'highlight.js/lib/languages/typescript';

// Then register the languages you need
hljs.registerLanguage('typescript', typescript);

//Need referneces to the buttons in order to add event listeners
const basicTypesButton = document.querySelector('#basicTypesButton');
const arrayTypesButton = document.querySelector('#arrayTypesButton');
const specialTypesButton = document.querySelector('#specialTypesButton');

// Need references to the card elements in order to update the content
const cardTitle = document.querySelector('.card-title');
const cardExplanation = document.querySelector('.cardExplanation');
const cardCode = document.querySelector('#cardCode');

// Add event listeners to the buttons
if (basicTypesButton) {
    basicTypesButton.addEventListener('click', () => loadExample("basic"))
}

if (arrayTypesButton) {
    arrayTypesButton.addEventListener('click', () => loadExample("array"))
}

if (specialTypesButton) {
    specialTypesButton.addEventListener('click', () => loadExample("special"))
}

let chosenExampleType: { title: string, explanation: string, code: string };

//Generic function to load the example content
function loadExample(exampleType: string){
    console.log(`loading example content for ${exampleType} types`);
    switch(exampleType){
        case "basic":
            chosenExampleType = basicTypesExample();
            break;
        case "array":
            chosenExampleType = arrayTypesExample();
            break;
        case "special":
            chosenExampleType = specialTypesExample();
            break;
        default:
            chosenExampleType = basicTypesExample();
    }
    if (cardTitle && cardExplanation && cardCode) {
        cardTitle.textContent = chosenExampleType.title;
        cardExplanation.textContent = chosenExampleType.explanation;
        cardCode.innerHTML = hljs.highlight(
            chosenExampleType.code,
            { language: 'typescript' }
        ).value;
    }
}

