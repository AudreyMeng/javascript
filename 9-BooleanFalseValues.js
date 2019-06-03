var isNaN = NaN; // false
var isZero = 0; // false
var isEmpty = ""; // false
var isNull = null; // false
if (isNaN || isZero || isEmpty || isNull) {
    alert("male");
} else {
    alert("female");
}
