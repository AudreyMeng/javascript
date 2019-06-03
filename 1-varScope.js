//先跑一次这个代码，得到的答案bam1和bam2都是111
//把25行改成 var bam = "222"
//则运行结果bam1是222，bam2是111
//原因是  [[Hoisting]]  第一次执行会生成global bam值为111
//第二次执行时，被解析生成local bam且值变成了222,但是 [[closure]]  global bam还记着值为111

//精髓是25行代码会第一次生成一个global [Hoisting]，第二次生成的local则局部有效[closure], 
//bam1是local bam,bam2是有很多次脚本执行记忆的global bam

//下面是彩蛋：：：：：：
//如果我们把25行的var去掉，那么无论怎么改变bam值，bam1和bam2都可以立马更新
//这是因为只有一个global bam [Hoisting]了，每次改变都会把global bam立马更新

var foo = "bar";

function bar() {
    let foo = "baz";
}

bar();
console.log("foo 1 : " + foo);

function baz() {
    foo = "bam";
    bam = "111";
    console.log("bam 1 : " + bam);
}
baz();
console.log("foo 2 : " + foo);
console.log("bam 2 : " + bam);