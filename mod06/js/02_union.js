"use strict";
function getColor(c) {
    if (typeof c === "string") {
        console.log(c.toUpperCase());
    }
    else {
        console.log(c.color);
    }
}
getColor("red");
getColor({ color: "green" });
