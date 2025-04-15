import { CodeExample } from "../../types/CodeExample";
import hljs from "highlight.js/lib/core";
import typescript from "highlight.js/lib/languages/typescript";

hljs.registerLanguage("typescript", typescript);

/**
 * A class representing a code snippet with a title and explanation.
 * @class ExampleCodeSnippet
 * @constructor
 * @param {string} title - The title of the code snippet.
 * @param {string} explanation - The explanation of the code snippet.
 * @param {string} code - The code snippet itself.
 */

export class ExampleCodeSnippet implements CodeExample {
    constructor(
        public title: string,
        public explanation: string,
        public code: string
    ) {}
    renderCodeSnippet(): string {
        const highlightedCode = hljs.highlight(this.code, { language: "typescript" }).value;
        return `<div class="code-snippet bg-base-200 rounded-lg p-4 my-4">
            <h2 class="text-xl font-bold mb-2 text-nord-snow-3">${this.title}</h2>
            <p class="text-nord-snow-2 mb-4">${this.explanation}</p>
            <pre class="bg-base-300 p-4 rounded-md overflow-x-auto">
                <code class="text-nord-frost-2 font-mono">${highlightedCode}</code>
            </pre>
        </div>`;
    }
}