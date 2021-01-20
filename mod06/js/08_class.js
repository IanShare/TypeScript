"use strict";
var mod06;
(function (mod06) {
    class GenericClass {
    }
    let c = new GenericClass();
    c.add = (i, j) => i.toUpperCase() + j.toUpperCase();
    console.log(c.add("aaa", "bbb"));
    let c2 = new GenericClass();
    c2.add = (i, j) => i + j;
    console.log(c2.add(50, 100));
})(mod06 || (mod06 = {}));
