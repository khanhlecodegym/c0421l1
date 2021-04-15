let num1 = document.getElementById('number1');
let num2 = document.getElementById('number2');
let hieu2 = document.getElementById('result1');
//
let num3 = document.getElementById('number3');
let num4 = document.getElementById('number4');
let tich1 = document.getElementById('result2');
//
let num5 = document.getElementById('number5');
let num6 = document.getElementById('number6');
let thuong1 = document.getElementById('result3');

function hieu(){
    console.log(parseInt(num1.value)  - parseInt(num2.value));
    hieu2.textContent = parseInt(num1.value) - parseInt(num2.value);
}

function tich(){
    console.log(parseInt(num3.value)  * parseInt(num4.value));
    tich1.textContent = parseInt(num3.value) * parseInt(num4.value);
}

function thuong(){
    console.log(parseInt(num5.value)  / parseInt(num6.value));
    thuong1.textContent = parseInt(num5.value) / parseInt(num6.value);
}
