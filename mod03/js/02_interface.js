"use strict";
var mod03;
(function (mod03) {
    //function declaration
    function func1(p) {
        console.log(p.x, p.y);
    }
    //function expression
    let func2 = function (p) {
        console.log(p.x, p.y);
    };
    //es6 arrow function
    let func3 = (p) => {
        console.log(p.x, p.y);
    };
    func1({ x: 10, y: 20 });
    func2({ x: 100, y: 200 });
    func3({ x: 200, y: 20 });
})(mod03 || (mod03 = {}));
