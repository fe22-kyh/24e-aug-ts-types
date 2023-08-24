import { Person } from './person';

const bertil: Person = {
  name: "Bertil",
  age: 52
}


function createHElement(textContent: string): HTMLHeadingElement {
  const h2 = document.createElement('h2');

  h2.textContent = textContent;

  return h2;
}

const heading = createHElement('Hey ' + bertil.name);

document.body.append(heading);