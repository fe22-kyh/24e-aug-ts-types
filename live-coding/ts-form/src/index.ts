import { Validation } from './abstract/abstractValidation';
import {
  TitleValidation, FirstNameValidation, LastNameValidation,
  EmailValidation, PhoneValidation, PasswordValidation,
  RePasswordValidation
} from './model/validationModel';
import { el, getField, getFieldValue } from './service/domService';
import { ValidationValue } from './type/validationType';

// Alternativ 2
const validations: Validation[] = [
  new TitleValidation('title', '.title-field'), // (validation prop (se validationType.ts), html-klass)
  new FirstNameValidation('firstName', '.fName-field'),
  new LastNameValidation('lastName', '.lName-field'),
  new EmailValidation('email', '.email-field'),
  new PhoneValidation('phone', '.phone-field'),
  new PasswordValidation('password', '.password-field'),
  new RePasswordValidation('repassword', '.repassword-field')
]

function handleSubmit(event: Event) {
  event.preventDefault();

  let errors = 0;
  let values: ValidationValue = {};

  for(let validation of validations) {
    if(!validation.verify()) {
      errors += 1;
      getField(validation.ref).style.backgroundColor = 'red';
    }
    values[validation.name] = getFieldValue(validation.ref);
  }

  if(errors > 0) return false;

  console.table(values);
}
el('.club-form').addEventListener('submit', handleSubmit);