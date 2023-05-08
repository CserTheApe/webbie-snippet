export default {
  render(props) {
    return `
          ${this.css(props.css)}
          ${this.html(props.html)}
          `;
  },

  html(prop) {
    return `
            <div id="container">
                ${
                  prop.copy
                    ? `<button ${
                        prop.buttonStyle ? `style="${prop.buttonStyle}"` : ""
                      } id="copier"><span id="coptext">Copy</span></button>`
                    : ""
                }
                <pre ${
                  prop.rootStyle ? `style="${prop.rootStyle}"` : ""
                } id="code-body"></pre>
            </div>
          `;
  },

  css(prop) {
    return `
      <style>
        pre {
            background-color: ${prop.dark ? "#222" : "#eee"};
            color: ${prop.dark ? "#eee" : "#222"};
            padding: 14px;
            counter-reset: line;
            border-radius: 5px;
            overflow: auto;
        }
        pre code.numbered:before {
            content: counter(line);
            display: inline-block;
            width: 20px;
            border-right: 1px solid #888;
            margin-right: 10px;
            padding-right: 10px;
            color: #888;
          }
        code {
            counter-increment: line;
            font-family: inherit;
        }
        #container {
            position: relative;
        }
        #copier {
            position: absolute;
            right: 10px;
            top: 10px;
            background-color: ${prop.dark ? "#333" : "#ddd"};
            border: 2px solid ${prop.dark ? "#aaa" : "#777"};
            color: ${prop.dark ? "#aaa" : "#777"};
            border-radius: 5px;
            padding: 5px;
            font-size: 0.8em;
            cursor: pointer;
        }
        #copier:active {
            background-color: ${prop.dark ? "#555" : "#bbb"};
        }
      </style>
      `;
  },
};
