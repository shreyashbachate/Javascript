var name = "Shreyash";

console.log("Line number 3", name);

function sayName() {
    var name = "S";
    console.log("Line number 7", name);
    sayNameTwo();

    function sayNameTwo() {
        var name = "S ";
        console.log("Line number 12", name);
    }
}

sayName();