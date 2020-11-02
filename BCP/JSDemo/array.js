let arr = [2, 3, 4, 5, 6, 7];

document.write("<br>FOR<br>");
for (let i = 0; i < arr.length; i++) {
    document.write(arr[i] + "-");
}

document.write("<br>WHILE<br>");
let i = 0;
while (i < arr.length) {
    document.write(arr[i] + "-");
    i++;
}
document.write("<br>DO-WHILE<br>");
i = 0;
do {
    document.write(arr[i] + "-");
    i++;
}
while (i < arr.length)
document.write("<br>FOR IN<br>");
for (var item in arr) {
    document.write(arr[item] + "-");
}

document.write("<br>FOR OF<br>");
let str = "";
for (var item of arr) {
    str += `${arr.indexOf(item)}-`;
    document.write(item + "-");
}
document.write("<br>" + str);

document.write("<br>FOR EACH<br>");
arr.forEach(function(v, i) {
    document.write(i + "-");
});

// let M = [];
// for (let i = 0; i < 5; i++) {
//     let arr = [];
//     for (let j = 0; j < 5; j++) {
//         arr[j] = Math.floor(Math.random() * 10 + 1);
//     }
//     M[i] = arr;
// }

// let M = new Array();
// for (let i = 0; i < 5; i++) {
//     let arr = new Array();
//     for (let j = 0; j < 5; j++) {
//         arr[j] = Math.floor(Math.random() * 10 + 1);
//     }
//     M[i] = arr;
// }

let M = new Array();
for (let i = 0; i < 5; i++) {
    M[i] = [];
    for (let j = 0; j < 5; j++) {
        M[i][j] = Math.floor(Math.random() * 10 + 1);
    }
}