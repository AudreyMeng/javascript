var obj = {
   a: 2,
   b: 3,
   c: 4 
};

obj.a = obj.b + obj.c;
obj.c = obj.b - obj.a;

with (obj) {
    a = b + c;
    d = b - a;
    d = 3; //
}

obj.d; // undefined
d; // 3 -- oops!

// with keyword is evil because it creates a new lexical scope.
// in strict mode, with is not allowed.

// Definition:
//JavaScript looks up an unqualified name by searching a scope chain associated with the execution context of the script or function containing that unqualified name. 
//The 'with' statement adds the given object to the head of this scope chain during the evaluation of its statement body. 
//If an unqualified name used in the body matches a property in the scope chain, then the name is bound to the property and the object containing the property. 