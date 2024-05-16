//Property flags and descriptors
let emp = {};

emp.name ="mayura";

console.log(Object.getOwnPropertyDescriptor(emp,"name"));

Object.defineProperty(emp, "age", {
    value:21,
    writable:true,
    configurable:true,
    enumerable:true
});

console.log(emp);