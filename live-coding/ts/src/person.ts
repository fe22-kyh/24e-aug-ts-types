type eligableNames = "Bertil" | "Gertrude"; // En typ är en alias för ett datatyp, men kan även användas för att sätta bestämda värden på datan
type positiveNumber = number;
//eligableNames = "Yves";

// type Person = {
//   name: fullName;
//   age: number;
// }

interface Person {
  name: eligableNames;
  age: positiveNumber; 
}

interface Person { // interfaces deklareras alltid som en union (läggs ihop)
  address: string;
}

const bertil: Person = {
  name: "Bertil",
  age: 54,
  address: "Bertilgatan 54"
}


type weekdays = 
  "Monday" | "Tuesday" | "Wednesday" | 
  "Thursday" | "Friday" | "Saturday" | 
  "Sunday";


