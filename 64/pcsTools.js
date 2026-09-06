function getElement(id) {
  return document.querySelector(id);
}

function setCss(element,property, value) {
  element.style[property] = value;
}

function on(element,eventType, callback) {
  element.addEventListener(eventType, callback);
}

function click(element, callback) {
  on(element, 'click', callback);
}

function getCss(element, property) {
    //return element.style[property];
    return getComputedStyle(element)[property];
}

export default function (selector) {
    const element = getElement(selector);
    return {
        css: (property, value) => {
            if (value === undefined) {
                return getCss(element, property);
            } else {
                setCss(element, property, value);
            }
        },
        on: (eventType, callback) => {
            on(element, eventType, callback);
        },
        click: (callback) => {
            click(element, callback);
        }

    };
}
// const pcsTools = {
//     getElement,
//     //setCss,
//     //getCss,
//     on,
//     click,
//     css: (element, property, value) => {
//         if (value === undefined) {
//             return getCss(element, property);
//         } else {
//             setCss(element, property, value);
//         }
//     },
    
//     };


//export default pcsTools;