enum Color {
    red = -1, blue, green
} // red = -1 , blue = 0 , green = 1 

let c: Color = Color.blue; // 0 
console.log(Color.blue);
console.log(Color[1]);
console.log(Color[c]);
display(c);

function display(color: Color) {
    switch (color) {
        case Color.blue:
            console.log("blue...");
            break;
        case Color.red:
            console.log("red...");
            break;
        case Color.green:
            console.log("green...");
            break;
    }
}