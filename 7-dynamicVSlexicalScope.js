// dynamic scoping is run time scoping
// lexical scoping is optimzation scoping

// with and eval are two ways to cheat scoping

// undefined variables are those that are not assigned any value but declared
// undeclared variables are those that are not declared
function foo() {
    console.log(bar); // dynamic!
}

function baz() {
    var bar = "bar";
    foo();
}

baz();