// interface IElement extends Element {
//   value?: string;
// }
define("service/domService", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getFieldValue = exports.getField = exports.el = void 0;
    /**
     * Used to fetch any kind of element regardless of their base type
     * @param ref any element reference in the dom structure
     * @returns a generic element
     */
    function el(ref) {
        const element = document.querySelector(ref);
        if (element == null) {
            throw new Error(`Element ${ref} was not found in the DOM tree`);
        }
        return document.querySelector(ref);
    }
    exports.el = el;
    /**
     * Used to fetch only input elements
     * Uses el function and then casts into an input element
     * @param ref ref to an input element
     * @returns the element reference
     */
    function getField(ref) {
        const field = el(ref);
        if (field.value == undefined) {
            throw new Error(`Element ${ref} is not a input element`);
        }
        return field;
    }
    exports.getField = getField;
    /**
     * fetches the input value of an input field
     * @param ref to the input field
     * @returns the value of the input field
     */
    function getFieldValue(ref) {
        return getField(ref).value;
    }
    exports.getFieldValue = getFieldValue;
});
define("type/validation", ["require", "exports", "service/domService"], function (require, exports, domService_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RePasswordValidation = exports.PasswordValidation = exports.PhoneValidation = exports.EmailValidation = exports.LastNameValidation = exports.FirstNameValidation = exports.TitleValidation = void 0;
    //class Validation { constructor(public name: string, public ref: string){} }
    class Validation {
        constructor(name, ref) {
            this.name = name;
            this.ref = ref;
        }
    }
    class TitleValidation extends Validation {
        verify() {
            return (0, domService_1.getFieldValue)(this.ref) !== 'Title';
        }
    }
    exports.TitleValidation = TitleValidation;
    class FirstNameValidation extends Validation {
        verify() {
            return (0, domService_1.getFieldValue)(this.ref).length > 2;
        }
    }
    exports.FirstNameValidation = FirstNameValidation;
    class LastNameValidation extends Validation {
        verify() {
            return (0, domService_1.getFieldValue)(this.ref).length > 2;
        }
    }
    exports.LastNameValidation = LastNameValidation;
    class EmailValidation extends Validation {
        verify() {
            let value = (0, domService_1.getFieldValue)(this.ref);
            return value.includes("@") && value.includes(".");
        }
    }
    exports.EmailValidation = EmailValidation;
    class PhoneValidation extends Validation {
        verify() {
            return Number.isInteger((0, domService_1.getFieldValue)(this.ref).replace(" ", ""));
        }
    }
    exports.PhoneValidation = PhoneValidation;
    class PasswordValidation extends Validation {
        verify() {
            return (0, domService_1.getFieldValue)(this.ref).length > 3;
        }
    }
    exports.PasswordValidation = PasswordValidation;
    class RePasswordValidation extends Validation {
        verify() {
            return (0, domService_1.getFieldValue)(this.ref) === (0, domService_1.getField)('.password-field').value;
        }
    }
    exports.RePasswordValidation = RePasswordValidation;
});
define("index", ["require", "exports", "type/validation", "service/domService"], function (require, exports, validation_1, domService_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // Alternativ 2
    const validations = [
        new validation_1.TitleValidation('title', '.title-field'),
        new validation_1.FirstNameValidation('firstName', '.fName-field'),
        new validation_1.LastNameValidation('lastName', '.lName-field'),
        new validation_1.EmailValidation('email', '.email-field'),
        new validation_1.PhoneValidation('phone', '.phone-field'),
        new validation_1.PasswordValidation('password', '.password-field'),
        new validation_1.RePasswordValidation('repassword', '.repassword-field')
    ];
    function handleSubmit(event) {
        event.preventDefault();
        let validationErrors = 0;
        let formValue = {};
        for (let validation of validations) {
            if (!validation.verify()) {
                validationErrors += 1;
                (0, domService_2.el)(validation.ref).style.backgroundColor = 'red';
            }
            formValue[validation.name] = (0, domService_2.el)(validation.ref).value;
        }
        if (validationErrors > 0)
            return false;
        console.table(formValue);
    }
    (0, domService_2.el)('.club-form').addEventListener('submit', handleSubmit);
});
