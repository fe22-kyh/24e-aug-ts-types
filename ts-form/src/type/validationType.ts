/**
 * Predefined validations types that represents the form and its submited values
 */

export type validationProp = 
  "title" | "firstName" | "lastName" |
  "email" | "phone" | "password" |
  "repassword";

export type ValidationValue = { [prop in validationProp]?: string } // foreach för typer, python? (? betyder optional)
