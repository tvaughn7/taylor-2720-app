import curriculum from '../data/curriculum.json';

const blocks = curriculum["responsive-web-design"].blocks;
console.log(blocks);

const blocksObject = Object.values(blocks);
console.log(blocksObject);

// this is an example of destructuring an object
const [basicCSS, basicHTML, glexbox, grid] = blocksObject

// example of destructuring an object into its keys 
const { meta, challenges } = basicCSS;


























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
