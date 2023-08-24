const el = (ref) => document.querySelector(ref);

// Alternativ 2
const validations = [
  new TitleValidation('title', '.title-field'),
  new FirstNameValidation('firstName', '.fName-field'),
  new LastNameValidation('lastName', '.lName-field'),
  new EmailValidation('email', '.email-field'),
  new PhoneValidation('phone', '.phone-field'),
  new PasswordValidation('password', '.password-field'),
  new RePasswordValidation('repassword', '.repassword-field')
]

function handleSubmit(event) {
  event.preventDefault();
  let validationErrors = 0;
  let formValue = {};

  for(let validation of validations) {
    if(!validation.verify()) {
      validationErrors += 1;
      el(validation.ref).style.backgroundColor = 'red';
    }
    formValue[validation.name] = el(validation.ref).value;
  }

  if(validationErrors > 0) return false;

  console.table(formValue);
}
el('.club-form').addEventListener('submit', handleSubmit);