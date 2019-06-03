var foo = "bar";

function bar() {
    var foo = "baz";

    function baz(foo) {
        foo = "bam";
        bam = "yay";
    }
    baz();
}

bar();
console.log("foo 1 : " + foo); //"bar", two foos inside bar function is in bar scope
console.log("bam 1 : " + bam); // "yay", hoisting create a global variable
baz();  // Reference Error! this function is out of scope