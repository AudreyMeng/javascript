function foo() {
    var bar = "bar";
    for (let i = 0; i < bar.length; i++) {
        console.log(bar.charAt(i));
    }
    console.log(i); // Reference Error because of let
}

foo();

// let will keep variable inside certain scope
// problem of let is that it don't have hoist like var.