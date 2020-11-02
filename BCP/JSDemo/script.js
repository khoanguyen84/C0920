function changeProvince() {
    var select = document.getElementById('provinces');
    document.getElementById('selectedText').value = select.options[select.selectedIndex].text;
    document.getElementById('selectedValue').value = select.options[select.selectedIndex].value;
}
var isLightOn = false;

function controllLight() {

    console.log(isLightOn);
    // window.alert(isLightOn);
    if (isLightOn) {
        document.getElementById("light").src = "images/lightOn.png";
        document.getElementById("switch").src = "images/switchOff.png";
    } else {
        document.getElementById("light").src = "images/lightOff.png";
        document.getElementById("switch").src = "images/switchOn.png";
    }
    console.log(document.getElementById("light").src);
    console.log(document.getElementById("switch").src);
    isLightOn = !isLightOn;
}

function init() {
    document.getElementById("light").src = "images/lightOff.png";
    document.getElementById("switch").src = "images/switchOn.png";
}

var hello = "hello";
if (true) {
    var hello = "hello instead"
}
console.log(hello);

let greeting = "greeting";
if (true) {
    let greeting = "greeting instead";
}
console.log(greeting);


// let number;
// do {
//     number = +prompt('input number:');
// }
// while (!Number.isInteger(number) || Number.isNaN(number));
// alert(number);


// let number = +prompt('input number:');

// while (!Number.isInteger(number) || Number.isNaN(number)) {
//     number = +prompt('input number:');
// };
// alert(number);


let number = +prompt('input number:');
for (let i = 0; !Number.isInteger(number) || Number.isNaN(number); i++) {
    number = +prompt('input number:');
}
alert(number);