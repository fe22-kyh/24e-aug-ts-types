define("person", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("index", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const bertil = {
        name: "Bertil",
        age: 52
    };
    function createHElement(textContent) {
        const h2 = document.createElement('h2');
        h2.textContent = textContent;
        return h2;
    }
    const heading = createHElement('Hey ' + bertil.name);
    document.body.append(heading);
});
