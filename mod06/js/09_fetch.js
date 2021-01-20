"use strict";
// npm init -y
// npm i --save isomorphic-fetch es6-promise
//import "isomorphic-fetch";
var mod06;
(function (mod06) {
    function callAPI() {
        fetch("aaa.txt")
            .then(response => response.text())
            .then(result => console.log(result));
    }
    callAPI();
    console.log(1);
})(mod06 || (mod06 = {}));
