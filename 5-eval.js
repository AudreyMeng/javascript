var bar = "bar";

function foo(str) {
    eval(str); //cheating
    console.log(bar); //42
}

foo("var bar = 42;");

// If you are wondering whether to use eval, then DON'T use it
// it makes code slower. This is why strict mode is faster.