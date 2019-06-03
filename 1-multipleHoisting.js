foo(); // "foo"
var foo = 2;
function foo() {
    console.log("bar");
}

function foo() {
    console.log("foo");
}
/* [hoisting]
only last foo function will be declared, while variable foo and foo function with bar are ignored.


compile whole code before execute.
*/