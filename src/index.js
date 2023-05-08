import Template from "./template.js";
import { autoSpace, encodeArray } from "./operations.js";

export default class CwcSnippet extends HTMLElement {
  constructor() {
    super();

    // Read attributes
    const manualSpacing = this.getAttribute("manual-spacing") !== null;
    const dark = this.getAttribute("dark") !== null;
    const numbered = this.getAttribute("numbered") !== null;
    const copy = this.getAttribute("enable-copy") !== null;
    const rootStyle = this.getAttribute("pre-style");
    const buttonStyle = this.getAttribute("button-style");

    // Initialize shadow DOM
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = Template.render({
      html: {
        copy,
        rootStyle,
        buttonStyle,
      },
      css: {
        dark,
      },
    });

    // Split input into lines and encode them
    let inputText = this.innerHTML.split("\n");
    console.log(inputText);
    if (!manualSpacing) inputText = autoSpace(inputText);
    let encodedText = encodeArray(inputText);

    // Add html encoded text to the body
    let codeEl = this.shadowRoot.getElementById("code-body");
    let lBreak = document.createElement("br");
    for (let line of encodedText) {
      let newLine = document.createElement("code");
      if (numbered) newLine.classList.add("numbered");
      newLine.innerHTML = line;
      codeEl.appendChild(newLine);
      codeEl.appendChild(lBreak.cloneNode());
    }

    // Logic to copy code snippet
    if (copy) {
      let copyText = this.shadowRoot.getElementById("coptext");
      this.shadowRoot.getElementById("copier").addEventListener("click", () => {
        navigator.clipboard.writeText(inputText.join("\n"));
        copyText.textContent = "Copied";
      });
    }
  }
}

if (!customElements.get("cwc-snippet")) {
  customElements.define("cwc-snippet", CwcSnippet);
}
