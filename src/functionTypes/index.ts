import { functionParams} from "../examples/functionTypes/examples";
import { loadExamples } from "../utils/exampleLoadFuncs";


const leftNavButton = document.querySelector('#leftNavButton');
const rightNavButton = document.querySelector('#rightNavButton');

if(leftNavButton){
    leftNavButton.addEventListener('click', () => loadExamples([functionParams()]))
}

