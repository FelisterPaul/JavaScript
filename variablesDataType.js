// Modern variable declarations
let name = "Alice";     // Block-scoped, reassignable
const age = 30;         // Block-scoped, NOT reassignable
var legacy = true;      // Function-scoped (avoid in modern code)

// Data types
let str = "Hello";      // String
let num = 42;           // Number
let bool = false;       // Boolean
let arr = [1, 2, 3];    // Array
let obj = { key: "value" }; // Object
let undef;              // undefined
let nothing = null;     // null
let sym = Symbol("id"); // Symbol

// Display variable values and types
console.log(`Name: ${name} (Type: ${typeof name})`);
console.log(`Age: ${age} (Type: ${typeof age})`);
console.log(`Legacy: ${legacy} (Type: ${typeof legacy})`);
console.log(`String: ${str} (Type: ${typeof str})`);
console.log(`Number: ${num} (Type: ${typeof num})`);
console.log(`Boolean: ${bool} (Type: ${typeof bool})`);
console.log(`Array: ${arr} (Type: ${typeof arr})`);
console.log(`Object: ${JSON.stringify(obj)} (Type: ${typeof obj})`);
console.log(`Undefined: ${undef} (Type: ${typeof undef})`);
console.log(`Null: ${nothing} (Type: ${typeof nothing})`);
console.log(`Symbol: ${sym.toString()} (Type: ${typeof sym})`); 