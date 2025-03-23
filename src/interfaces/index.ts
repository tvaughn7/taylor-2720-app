import curriculum from '../data/curriculum.json';
import { CodeSnippet } from '../types/codeSnippet';

const blocks = curriculum["responsive-web-design"].blocks;
console.log(blocks);

const blocksObject = Object.values(blocks);
console.log(blocksObject);

// this is an example of destructuring an object
const [basicCSS, basicHTML, glexbox, grid] = blocksObject

// example of destructuring an object into its keys 
const { meta, challenges } = basicCSS;

const navBar = document.querySelector('.navbar #navBarCenter')
const navList = document.querySelector('#navList')
const snippetDisplay = document.querySelector('#snippetDisplay')

const buildTopNavFromJSON = (blocksArray: any) => {
    blocksArray.forEach((block: any) => {
        const navItem = document.createElement('a');
        navItem.classList.add('btn');
        navItem.href = block.meta && block.meta.name ? `#${block.meta.name}` : '#';
        navItem.innerText = block.meta.name;

    navItem.addEventListener('click', (event: any) => {
        // find the block that matches the navItem that was clicked
        const blockToDisplay = blocksArray.find((block:any) => 
        block.meta.name === event.target.innerText);
        //console.log(blockToDisplay);
        // build the left nav from the block
        buildLeftNavfromJSON(blockToDisplay);
    })

        navBar?.appendChild(navItem);
    })

}

const buildLeftNavfromJSON = (block: any) => {
    console.log(block.meta.name)

    // clear out the left nav
    while (navList?.firstChild) {
        navList.removeChild(navList.firstChild);
    }

    block.challenges.forEach((challenge: any) => {
        const listItem = document.createElement('li');
        
        listItem.classList.add("list-row",);
        const listDiv = document.createElement('div');
        listDiv.classList.add("btn", "btn-ghost");
        listDiv.textContent = challenge.title;
        listDiv.addEventListener('click', (event: any) => {
           buildSnippetDisplay(challenge);
     })

        listItem.appendChild(listDiv);
        navList?.appendChild(listItem);
    })
}

const buildSnippetDisplay = (challenge: CodeSnippet) =>{
    // make some DOM elements to display the challenge

    while (snippetDisplay?.firstChild) {
        snippetDisplay.removeChild(snippetDisplay.firstChild);
    }

    const title = document.createElement('h2');
    title.textContent = challenge.title;
    title.classList.add('text-2xl', 'font-bold', 'text-center', 'mb-4');
    const description = document.createElement('div');
    description.innerHTML = challenge.description as string;

    const instructions = document.createElement('div');
    instructions.innerHTML = challenge.instructions as string;
    instructions.classList.add('mb-4');

    snippetDisplay?.appendChild(title);
    snippetDisplay?.appendChild(description);
    snippetDisplay?.appendChild(instructions);
}

buildTopNavFromJSON(blocksObject);

























class Bird {
    wingSpan: number = 0;
    fly() {
        return 'Bird is finally flying'
    }
}

class Eagle extends Bird {
    wingSpan: number = 2;
    fly() {
        return 'Eagle is finally flying'
    }
}

interface CanSwim {
    swim(): string;
    webbedFeet: boolean;
}

class Duck extends Bird implements CanSwim {
    webbedFeet: boolean = true;

    quack() {
        return 'Duck is quacking';
    }

    swim() {
        return 'Duck is swimming';
    }

    fly() {
        return 'Duck is flying';
    }
}

const myDuck = new Duck();
myDuck.wingSpan = 1;
myDuck.webbedFeet = true;
console.log(`Duck's wing span: ${myDuck.wingSpan}, who can fly and quack! ${myDuck.quack()}`);
