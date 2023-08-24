import {
  TitleValidation, FirstNameValidation, LastNameValidation,
  EmailValidation, PhoneValidation, PasswordValidation,
  RePasswordValidation, Validation
} from './type/validation';
import { el, getField } from './service/domService';


// Alternativ 2
const validations: Validation[] = [
  new TitleValidation('title', '.title-field'),
  new FirstNameValidation('firstName', '.fName-field'),
  new LastNameValidation('lastName', '.lName-field'),
  new EmailValidation('email', '.email-field'),
  new PhoneValidation('phone', '.phone-field'),
  new PasswordValidation('password', '.password-field'),
  new RePasswordValidation('repassword', '.repassword-field')
]

function handleSubmit(event: Event) {
  event.preventDefault();

  let validationErrors = 0;
  let formValue = {};

  for(let validation of validations) {
    if(!validation.verify()) {
      validationErrors += 1;
      getField(validation.ref).style.backgroundColor = 'red';
    }
    formValue[validation.name] = getField(validation.ref).value;
  }

  if(validationErrors > 0) return false;

  console.table(formValue);
}
el('.club-form').addEventListener('submit', handleSubmit);