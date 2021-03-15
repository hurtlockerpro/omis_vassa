"use strict";
console.log('Hello TypeScript');
let x = 10;
// string
// boolean
// Any
// bigint    ->  100000n
// void -> no return 
// fn -> type -> return 
let z = '';
// undefined
// enum -> perechislenie
let cars = ['audi', 'bmw', '1000'];
//let cars2:Array<string> = ['audi', 'bmw', '1000']
let carItems = ['audi', 2.0, false];
function getA(x = 18, y = 'text') {
    console.log('this is void function');
}
getA();
function getB() {
    return 'this is return function';
}
getB();
// javascript
let months = {
    january: 1,
    february: 2
};
// typescript
var months2;
(function (months2) {
    months2[months2["january"] = 10] = "january";
    months2[months2["february"] = 20] = "february";
})(months2 || (months2 = {}));
let myMonth = months2.february;
if (typeof cars == "object") {
    console.log('this is array');
}
let txt = 'Hello TypeScript';
let txtLenth = txt.length;
let txtLenth2 = txt.length;
function getAllArguments(x, ...r) { }
// 1
function getM(x) {
    return 10;
}
let fn = function (n, m) {
    let a = n + m;
    return a;
};
getM(fn);
// 2
let sum = (x, y) => x + y;
console.log("result: ", sum(2, 4));
class X {
    constructor(_internal = 'sdfgsef') {
        this._internal = _internal;
        this.x = {
            getX: () => {
                function g() { }
            }
        };
    }
}
