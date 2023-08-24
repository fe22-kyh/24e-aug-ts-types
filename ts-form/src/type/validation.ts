class Validation {
  constructor(name, ref) {
    this.name = name;
    this.ref = ref;
  }
}

class TitleValidation extends Validation {
  verify() {
    return el(this.ref).value !== 'Title';
  }
}

class FirstNameValidation extends Validation {
  verify() {
    return el(this.ref).value.length > 2;
  }
}

class LastNameValidation extends Validation {
  verify() {
    return el(this.ref).value.length > 2;
  }
}

class EmailValidation extends Validation {
  verify() {
    let value = el(this.ref).value;
    return value.includes("@") && value.includes(".");
  }
}

class PhoneValidation extends Validation {
  verify() {
    return Number.isInteger(el(this.ref).value.replace(" ", ""));
  }
}

class PasswordValidation extends Validation {
  verify() {
    return el(this.ref).value.length > 3
  }
}

class RePasswordValidation extends Validation {
  verify() {
    return el(this.ref).value === el('.password-field').value
  }
}