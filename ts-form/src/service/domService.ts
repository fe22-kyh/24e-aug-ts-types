// interface IElement extends Element {
//   value?: string;
// }

/**
 * Used to fetch any kind of element regardless of their base type
 * @param ref any element reference in the dom structure
 * @returns a generic element
 */
export function el(ref: string): Element {
  const element = document.querySelector(ref);

  if(element == null) {
    throw new Error(`Element ${ref} was not found in the DOM tree`);
  }

  return document.querySelector(ref) as Element;
}

/**
 * Used to fetch only input elements
 * Uses el function and then casts into an input element
 * @param ref ref to an input element
 * @returns the element reference
 */
export function getField(ref: string): HTMLInputElement {
  const field = el(ref) as HTMLInputElement;
  
  if(field.value == undefined) {
    throw new Error(`Element ${ref} is not a input element`);
  }

  return field;
}

/**
 * fetches the input value of an input field
 * @param ref to the input field
 * @returns the value of the input field
 */
export function getFieldValue(ref: string): string {
  return getField(ref).value;
}
  
