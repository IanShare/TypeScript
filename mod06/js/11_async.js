"use strict";
var mod06;
(function (mod06) {
    async function callAPI() {
        // fetch("https://www.google.com")
        let response = await fetch("aaa.txt");
        let result = await response.text();
        console.log(result);
    }
    callAPI();
    console.log(1);
})(mod06 || (mod06 = {}));
