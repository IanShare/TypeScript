"use strict";
var mod03;
(function (mod03) {
    let func3 = (p) => {
        // console.log(p.x, p.y);
        // if (p.y) {
        //     console.log(p.x, p.y)
        // } else {
        //     console.log(p.x)
        // }
        if (p.y === undefined) {
            console.log(p.x);
        }
        else {
            console.log(p.x, p.y);
        }
    };
    func3({ x: 10, y: 100 });
    func3({ x: 200 });
    func3({ x: 30, y: 0 });
})(mod03 || (mod03 = {}));
