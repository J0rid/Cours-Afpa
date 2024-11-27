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

    static appendChild(parentElem, childElem) {
        parentElem.appendChild(childElem);
    }

    static modifyStyle(elemHTML, property, value) {
        elemHTML.style[property] = value;
    }

    static 


}

export default Dom