"use strict";
var mod06;
(function (mod06) {
    let c = {
        walk() {
            console.log("Cat is walking");
        }
    };
    let p = {
        walk() {
            console.log("Person is walking");
        }, work() {
            console.log("Person is working");
        }
    };
    function getAnimal(a) {
        return a;
    }
    let a1 = getAnimal(c);
    let a2 = getAnimal(p);
    a1.walk();
    function isPerson(o) {
        return o.work !== undefined;
    }
    if (isPerson(a1)) {
        a1.work();
    }
    a2.walk();
    if (isPerson(a2)) {
        a2.work();
    }
})(mod06 || (mod06 = {}));
