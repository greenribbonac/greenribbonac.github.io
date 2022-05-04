/**
 * クラスを書かずにCustomElementを定義するためのヘルパ関数
 */
export function defineCustomElement(name, { connectedCallback }) {
    customElements.define(name,
        class extends HTMLElement {
            constructor() {
                super();
            }
            connectedCallback () {
                connectedCallback(this)
            }
        }
    );
}

/**
 * テンプレートにするテンプレートIDを指定してCustomElementを定義する関数
 */
export function defineCustomElementWithTemplate({ tagName, templateID }) {
    defineCustomElement(tagName, {
        connectedCallback: (elem) => {
            const template = document.getElementById(templateID);
            const templateContent = template.content.cloneNode(true);

            elem.attachShadow({mode: 'open'})
                .appendChild(templateContent);
        }
    });
}
