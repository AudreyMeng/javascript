//最后一行代码会报错，因为bam是let, 所以只局部有效
//如果把bam的let去掉，[Hoisting] bam1和bam2都是global bam了

//foo1是bar(let foo只局部有效，所有foo1还是global var foo)
//foo2是bam(baz函数里对global var foo重新赋值了)

var foo = "bar";

function bar() {
    let foo = "baz";
}

bar();
console.log("foo 1 : " + foo);

function baz() {
    foo = "bam";
    let bam = "yay";
    console.log("bam 1 : " + bam);
}
baz();
console.log("foo 2 : " + foo);
console.log("bam 2 : " + bam);