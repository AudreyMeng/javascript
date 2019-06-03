/*
1, two methods to define array
2, array elements can have DIFFERENT types
3, push/pop elements
*/

// method 1
var arr = [];
arr[0] = 0;
arr[1] = 1;
console.log(arr);

// method 2
var primes = [0,1,2,3];
var firstPrime = primes[0];
console.log(firstPrime);

// array elements can have different types
var diverseArr = [1, "hello"];
console.log(diverseArr[0]);
console.log(diverseArr[1]);
// array length
console.log(diverseArr.length);

// push elements
diverseArr.push("new element");
console.log(diverseArr);

// pop elements
diverseArr.pop();
console.log(diverseArr);
