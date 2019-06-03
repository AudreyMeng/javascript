var foo = "foo";

//function expression
// this is to help hide the statements inside the function.
(function(){
    var foo = "foo2";
    console.log(foo); // "foo2"
})();

console.log(foo); // "foo"

// we can also add parameters for IIFE functions
(function(bar){
    var foo = bar;
    console.log(foo); // "foo"
})(foo);

console.log(foo); // "foo"