/**
 * This file represents abstract implementions of validations
 * abstact --> implementation is made by implementing class
 */

import { validationProp } from "../type/validationType";

interface HasVerify {
  verify: () => boolean; //abstract method (ej implementerad)
}

//class Validation { constructor(public name: string, public ref: string){} }

//implements --> "has-a" --> den har en viss egenskap
export abstract class Validation implements HasVerify { // basklass, abstract syftar på att objektet Måste extendas av en annan klass för att instansieras
  name: validationProp;
  ref: string;

  constructor(name: validationProp, ref: string) {
    this.ref = ref;
    this.name = name;
  }

  abstract verify(): boolean; // denna implementeras av ärvda klasser, inte i basklassen
}
