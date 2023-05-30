(()=>{"use strict";const e={render(e){return`\n          ${this.css(e.css)}\n          ${this.html(e.html)}\n          `},html:e=>`\n            <div id="container">\n                ${e.copy?`<button ${e.buttonStyle?`style="${e.buttonStyle}"`:""} id="copier"><span id="coptext">Copy</span></button>`:""}\n                <pre ${e.rootStyle?`style="${e.rootStyle}"`:""} id="code-body"></pre>\n            </div>\n          `,css:e=>`\n      <style>\n        pre {\n            background-color: ${e.dark?"#222":"#eee"};\n            color: ${e.dark?"#eee":"#222"};\n            padding: 14px;\n            counter-reset: line;\n            border-radius: 5px;\n            overflow: auto;\n        }\n        pre code.numbered:before {\n            content: counter(line);\n            display: inline-block;\n            width: 20px;\n            border-right: 1px solid #888;\n            margin-right: 10px;\n            padding-right: 10px;\n            color: #888;\n          }\n        code {\n            counter-increment: line;\n            font-family: inherit;\n        }\n        #container {\n            position: relative;\n        }\n        #copier {\n            position: absolute;\n            right: 10px;\n            top: 10px;\n            background-color: ${e.dark?"#333":"#ddd"};\n            border: 2px solid ${e.dark?"#aaa":"#777"};\n            color: ${e.dark?"#aaa":"#777"};\n            border-radius: 5px;\n            padding: 5px;\n            font-size: 0.8em;\n            cursor: pointer;\n        }\n        #copier:active {\n            background-color: ${e.dark?"#555":"#bbb"};\n        }\n      </style>\n      `},t={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&apos;"};class n extends HTMLElement{constructor(){super();const n=null!==this.getAttribute("manual-spacing"),o=null!==this.getAttribute("dark"),r=null!==this.getAttribute("numbered"),i=null!==this.getAttribute("enable-copy"),d=this.getAttribute("pre-style"),s=this.getAttribute("button-style");this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=e.render({html:{copy:i,rootStyle:d,buttonStyle:s},css:{dark:o}});let l=this.innerHTML.split("\n");n||(l=function(e){let t=e.findIndex((e=>/\S/.test(e))),n=e.findLastIndex((e=>/\S/.test(e))),o=e.slice(t,n+1),r=o[0].search(/\S/);return r>0?o.map((e=>{let t=e.search(/\S/);return e.slice(Math.min(t,r))})):o}(l));let a=l.map((e=>function(e){for(let n of Object.keys(t))e=e.replaceAll(n,t[n]);return e}(e))),c=this.shadowRoot.getElementById("code-body"),p=document.createElement("br");for(let e of a){let t=document.createElement("code");r&&t.classList.add("numbered"),t.innerHTML=e,c.appendChild(t),c.appendChild(p.cloneNode())}if(i){let e=this.shadowRoot.getElementById("coptext");this.shadowRoot.getElementById("copier").addEventListener("click",(()=>{navigator.clipboard.writeText(l.join("\n")),e.textContent="Copied"}))}}}customElements.get("webbie-snippet")||customElements.define("webbie-snippet",n)})();