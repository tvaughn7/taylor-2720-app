import { basicTypesNumber, basicTypesString, arrayTypes, specialTypes, basicTypesBoolean, tupleTypes, nullTypes } from "../examples/basicTypes/examples";
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
    const examples = [
        basicTypesNumber(),
        basicTypesString(),
        basicTypesBoolean()
    ]     
    basicTypesButton.addEventListener('click', () => loadExamples(examples))
}

if (arrayTypesButton) {
    const arrayExamples = [
        arrayTypes(),
        tupleTypes()

    ]
    arrayTypesButton.addEventListener('click', () => loadExamples(arrayExamples))
}

if (specialTypesButton) {
    const specialExamples = [
        specialTypes(),
        nullTypes()
    ]
    specialTypesButton.addEventListener('click', () => loadExamples(specialExamples))
}

let chosenExampleType: { title: string, explanation: string, code: string };

//Have loadExample function load the importated examples functions
function loadExample(exampleType: string){
    console.log(`loading example content for ${exampleType} types`);
    switch(exampleType){
        case "basic":
            chosenExampleType = basicTypesNumber();
            break;
        case "array":
            chosenExampleType = arrayTypes();
            break;
        case "special":
            chosenExampleType = specialTypes();
            break;
        default:
            chosenExampleType = basicTypesNumber();
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
 // Be able to load many exmaples passed in as an array
function loadExamples(examples: any[]){
    // get a reference to the example card container
    const container = document. querySelector('#exampleContainer');
    if (!container) {
        console.error("could not find examples container");
        return;
    }
 

    container.innerHTML = examples.map((example) => `
<h2 class="card-title">${example.title}</h2>
<p class="cardExplanation">${example.explanation}</p>
<div id="exampleBlock" class="bg-base-content px-4 rounded-lg">
<pre class=" text-slate-200">
<code id="cardCode" class="text-wrap">
${hljs.highlight(example.code, { language: 'typescript' }).value}
</code>
</pre> 
</div>
`).join('');
}


