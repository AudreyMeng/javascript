// Function Declaration: function keyword is the very first word in statement
// Here, notice: in statement instead of line
var foo = "bar";

// function declaration
function mar() {
    var foo = "baz";

    function baz(foo) {
        foo = "bam";
        bam = "yay";
    }
    baz();
}

// NOT function declaration, it's name function expression
var foo = function bar() {
    var foo = "baz";

    function baz(foo) {
        foo = bar;
        foo; // function
    }
    baz();
};

foo();
bar(); // Error!!! function bar is only available in scope inside lines 17-25.

// name function expression is better than anonymous function expression
// 1, for recursion or other reference
// 2, easier debugging
// 3, better understanding