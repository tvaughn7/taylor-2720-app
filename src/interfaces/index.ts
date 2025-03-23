import curriculum from '../data/curriculum.json';

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
    block.challenges.forEach((challenge: any) => {
        const listItem = document.createElement('li');
        listItem.textContent = challenge.title;
        listItem.classList.add("btn","btn-ghost", "list-row",);

        navList?.appendChild(listItem);
    })
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
