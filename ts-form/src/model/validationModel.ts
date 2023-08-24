/**
 * This file represents the business logic for validations
 * Business logic --> how the process is done (the implementation)
 */

import { Validation } from "../abstract/abstractValidation";
import { getFieldValue, getField } from "../service/domService";

export class TitleValidation extends Validation { // barn till validation, ärvd från validation (är en validation plus mer)
  verify() {
    return getFieldValue(this.ref) !== 'Title';
  }
}

export class FirstNameValidation extends Validation {
  verify() {
    return getFieldValue(this.ref).length > 2;
  }
}

export class LastNameValidation extends Validation {
  verify() {
    return getFieldValue(this.ref).length > 2;
  }
}

export class EmailValidation extends Validation {
  verify() {
    let value = getFieldValue(this.ref);
    return value.includes("@") && value.includes(".");
  }
}

export class PhoneValidation extends Validation {
  verify() {
    return Number.isInteger(getFieldValue(this.ref).replace(" ", ""));
  }
}

export class PasswordValidation extends Validation {
  verify() {
    return getFieldValue(this.ref).length > 3
  }
}

export class RePasswordValidation extends Validation {
  verify() {
    return getFieldValue(this.ref) === getField('.password-field').value
  }
}