// let name = 'tOÀN';
// name = "Duy";
// let age = 24;
// age = prompt("Nhập vào tuổi của bạn", 1)
// document.write(name, age , '<br>');
// let nickname = name;
// age = parseInt(age)  + 1;
// document.write(name, age , '<br>');
// let is18age = confirm("Bạn đã đủ 18 tuổi chưa?");
// if (is18age == true) {
//     document.write(is18age);
// }

let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let sum2num = document.getElementById("result");


function sum() {
    console.log(parseInt(num1.value)  + parseInt(num2.value));
    sum2num.textContent = parseInt(num1.value)  + parseInt(num2.value);
}

