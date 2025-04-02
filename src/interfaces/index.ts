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

// Add a helper function to handle scroll alignment
const scrollToElement = (element: HTMLElement, targetElement: HTMLElement) => {
    const elementRect = element.getBoundingClientRect();
    const targetRect = targetElement.getBoundingClientRect();
    
    // Calculate the offset to align the snippet with the clicked nav item
    const offset = elementRect.top - targetRect.top;
    
    targetElement.scrollTo({
        top: targetElement.scrollTop + offset,
        behavior: 'smooth'
    });
};

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
        listItem.classList.add("list-row", "p-0", "relative");
        
        const listDiv = document.createElement('div');
        listDiv.classList.add(
            "btn",
            "btn-ghost",
            "w-64",
            "h-24",
            "transition-all",
            "duration-200"
        );
        
        listDiv.textContent = challenge.title;
        
        listDiv.addEventListener('click', (event: any) => {
            // Remove active state from all items
            navList?.querySelectorAll('.btn-ghost').forEach(btn => {
                btn.classList.remove('btn-active', 'bg-primary/10');
            });
            
            // Add active state to clicked item
            listDiv.classList.add('btn-active', 'bg-primary/10');
            
            // Build and show the snippet
            const snippetElement = buildSnippetDisplay(challenge);
            
            if (snippetElement && listDiv) {
                // Use requestAnimationFrame to wait for the DOM update
                requestAnimationFrame(() => {
                    scrollToElement(listDiv, snippetDisplay as HTMLElement);
                });
            }
        });

        listItem.appendChild(listDiv);
        navList?.appendChild(listItem);
    });
};

const buildSnippetDisplay = (challenge: CodeSnippet): HTMLElement | null => {
    if (!snippetDisplay) return null;

    while (snippetDisplay.firstChild) {
        snippetDisplay.removeChild(snippetDisplay.firstChild);
    }

    const card = document.createElement('div');
    card.classList.add(
        'card',
        'bg-base-100',
        'shadow-xl',
        'mx-auto',
        'w-full',
        'max-w-4xl',
        'transition-all',
        'duration-300',
        'opacity-0', // Start invisible
        'translate-x-4', // Start slightly offset
        'mb-4' // Add margin bottom for spacing between cards
    );

    // Card body
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    // Title with badge
    const titleContainer = document.createElement('div');
    titleContainer.classList.add('flex', 'items-center', 'gap-4', 'mb-6');

    const title = document.createElement('h2');
    title.textContent = challenge.title;
    title.classList.add(
        'card-title',
        'text-3xl',
        'font-bold',
        'text-primary'
    );

    const badge = document.createElement('div');
    badge.classList.add('badge', 'badge-secondary', 'badge-lg');
    badge.textContent = 'Challenge';

    titleContainer.appendChild(title);
    titleContainer.appendChild(badge);

    // Description section
    const descriptionContainer = document.createElement('div');
    descriptionContainer.classList.add(
        'prose',
        'prose-lg',
        'mb-8',
        'p-6',
        'bg-base-200',
        'rounded-xl'
    );
    descriptionContainer.innerHTML = challenge.description as string;

    // Instructions section
    const instructionsContainer = document.createElement('div');
    instructionsContainer.classList.add(
        'alert',
        'alert-info',
        'shadow-lg',
        'mt-4'
    );

    const instructionsContent = document.createElement('div');
    instructionsContent.classList.add('prose', 'prose-lg', 'max-w-none');
    instructionsContent.innerHTML = challenge.instructions as string;

    instructionsContainer.appendChild(instructionsContent);

    // Assemble the card
    cardBody.appendChild(titleContainer);
    cardBody.appendChild(descriptionContainer);
    cardBody.appendChild(instructionsContainer);
    card.appendChild(cardBody);
    snippetDisplay.appendChild(card);

    // Trigger animation after append
    requestAnimationFrame(() => {
        card.classList.remove('opacity-0', 'translate-x-4');
    });

    return card;
};

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
