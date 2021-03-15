console.log('Hello TypeScript');
var x = 10;
// string
// boolean
// Any
// bigint    ->  100000n
// void -> no return 
// fn -> type -> return 
var z = '';
// undefined
// enum -> perechislenie
var cars = ['audi', 'bmw', '1000'];
//let cars2:Array<string> = ['audi', 'bmw', '1000']
var carItems = ['audi', 2.0, false];
function getA(x, y) {
    if (x === void 0) { x = 18; }
    if (y === void 0) { y = 'text'; }
    console.log('this is void function');
}
getA();
function getB() {
    return 'this is return function';
}
getB();
// javascript
var months = {
    january: 1,
    february: 2
};
// typescript
var months2;
(function (months2) {
    months2[months2["january"] = 10] = "january";
    months2[months2["february"] = 20] = "february";
})(months2 || (months2 = {}));
var myMonth = months2.february;
if (typeof cars == "object") {
    console.log('this is array');
}
var txt = 'Hello TypeScript';
var txtLenth = txt.length;
var txtLenth2 = txt.length;
function getAllArguments(x) {
    var r = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        r[_i - 1] = arguments[_i];
    }
}
// 1
function getM(x) {
    return 10;
}
var fn = function (n, m) {
    var a = n + m;
    return a;
};
getM(fn);
// 2
var sum = function (x, y) { return x + y; };
console.log("result: ", sum(2, 4));
var X = /** @class */ (function () {
    function X(_internal) {
        if (_internal === void 0) { _internal = 'sdfgsef'; }
        this._internal = _internal;
        this.x = {
            getX: function () {
                function g() { }
            }
        };
    }
    return X;
}());
