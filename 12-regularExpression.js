/*
 regular expression
*/

// regular expression is inside //
var string = "[]1 double quotes 'single' here \"escape\"";
// search()
var offset = string.search(/quote/); // "quote" string
console.log(offset);
var offset = string.search(/[a-z]/); // any letter a-z
console.log(offset);
var offset = string.search(/[a-z]*/); // any except a-z
console.log(offset);
// \b means word boundary, {4} means length
var offset = string.search(/\b[a-z]{4}\b/); // any word with 5 letter a-z
console.log(offset);

var string = "my zip is 01720-1234 what is yours";
// word with 5 numbers
var offset = string.search(/\b[0-9]{5}\b/);
console.log(offset);
// word with 5 numbers then OPTIONALLY with - and 4 numbers
// ? means matching 0 or 1 times
var offset = string.search(/\b[0-9]{5}(-[0-9]{4})?\b/);
console.log(offset);