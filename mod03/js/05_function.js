"use strict";
var mod03;
(function (mod03) {
    let add = function (i, j) {
        return i + j;
    };
    let sub = (i, j) => i - j;
    let mul = (i, j) => i * j;
    let addArray = function (x, y) {
        var arr = new Array();
        arr.push(x);
        arr.push(y);
        return arr;
    };
    console.log(add(100, 200));
    console.log(sub(500, 300));
    console.log(mul(60, 70));
    console.log(addArray("aaa", "bbb"));
})(mod03 || (mod03 = {}));
