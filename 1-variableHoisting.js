console.log(a); //undefined
console.log(b); //undefined
var a = b;
var b = 2;
console.log(a); //undefined
console.log(b); //2

/* equals [hoisting]
var a;
var b;
console.log(a); //
console.log(b); //
a = b;
b = 2;
console.log(a); //
console.log(b); //

compile whole code before execute.
*/