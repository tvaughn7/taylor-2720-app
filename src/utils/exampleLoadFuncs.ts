import hljs from 'highlight.js/lib/core';
import typescript from 'highlight.js/lib/languages/typescript';

// Then register the languages you need
hljs.registerLanguage('typescript', typescript);

export function loadExamples(examples: any[]){
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
