/*
1, single/double quotes are the same
2, mix use is okay, repeated use need an escape \
3, charAt(), indexOf(),split(),slice()
3, push/pop elements
*/

/* 1, 2 */
var string1 = "double quotes 'single' here \"escape\"";
var string2 = 'single quotes "double" here \'escape\'';
console.log(string1);
console.log(string2);


/* 3 */
// split()
var arr = string1.split(" ");
console.log(arr);

// indexOf()
var indexOfHere = string1.indexOf("here");
console.log(indexOfHere);
// charAt()
console.log(string1.charAt(indexOfHere));

// slice(begin[inclusive], end[exclusive])
var begin = string1.indexOf('single');
var end = string1.indexOf('escape');
var slice = string1.slice(begin, end);
console.log(slice);