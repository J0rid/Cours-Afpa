// Classe utils
class Dom {

    static getDomElement(selection) {
        return document.querySelector(selection);
    }

    static getDomElements(selection) {
        return document.querySelectorAll(selection);
    }

    static triggerEvent(elemHTML, eventType, functionToBeCalled) {
        elemHTML.addEventListener(eventType, functionToBeCalled);
    }

    static modifyText(elemHTML, text) {
        elemHTML.textContent = text;
    }

    static modifyHtml(elemHTML, html) {
        elemHTML.innerHTML = html;
    }

    static toggleClass(elemHTML, classToToggle, action) {
        elemHTML.classList[action](classToToggle);
    }

    static createElement(elemHTML) {
        return document.createElement(elemHTML);
    }

    static createElementsWithInnerElem(parentElem, ...childElem) {

        // Création de mon élément parent
        let parent = document.createElement(parentElem[0]);
        parent.className = parentElem[1];
        parent.id = parentElem[2];

        childElem.forEach( elem => {

            let child = document.createElement(elem[0]);
            child.classList.add(elem[1]);
            child.innerText = elem[2];
            this.appendChild(parent, child);

        });

        return parent;

    }

    static appendChild(parentElem, childElem) {
        parentElem.appendChild(childElem);
    }

    static modifyStyle(elemHTML, property, value) {
        elemHTML.style[property] = value;
    }

}

export default Dom