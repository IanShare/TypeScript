"use strict";
let book = { title: "ts", price: 200 };
console.log(book.title, book.price);
//--------------------------------
// book.id=1; //error
let book2;
book2 = { title: "js", price: 300 };
console.log(book2.title, book2.price);
console.log("=================================");
let books = [book, book2];
books.forEach(element => {
    console.log(element.title, element.price);
});
