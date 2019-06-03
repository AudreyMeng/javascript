// we can consider C header file as automatically hoisting

var a = b();
var c = d();
console.log(a); //
console.log(c); //

function b() {
    return c;
}

var d = function() {
    return b();
}
/* equals 
function b() {
    return c;
}
var a;
var c;
var d;
a = b();
c = d();
console.log(a); // function hoisting for b
console.log(c); // can't hoisting for variable d

compile whole code before execute.
*/