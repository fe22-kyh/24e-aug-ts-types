import { el, getField, getFieldValue } from './../service/domService';


interface HasVerify {
  verify: () => boolean; //abstract method (ej implementerad)
}

//class Validation { constructor(public name: string, public ref: string){} }

export abstract class Validation implements HasVerify { // basklass, abstract syftar på att objektet Måste extendas av en annan klass för att instansieras
  name: string;
  ref: string;

  constructor(name: string, ref: string) {
    this.name = name;
    this.ref = ref;
  }

  abstract verify(): boolean; // denna implementeras av ärvda klasser, inte i basklassen
}


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