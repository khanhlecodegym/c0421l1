let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let sum2num;
let pro2num;
let mod2num;
let sub2num;
function sum() {
        sum2num = parseInt(num1.value)  + parseInt(num2.value);
    document.getElementById("ketqua").innerHTML = sum2num
}
function pro(){
pro2num = parseInt(num1.value) * parseInt(num2.value);
document.getElementById("ketqua").innerHTML = pro2num
}
function mod(){
    mod2num = parseInt(num1.value) / parseInt(num2.value);
    document.getElementById("ketqua").innerHTML = mod2num
    }
    function sub(){
        sub2num = parseInt(num1.value) - parseInt(num2.value);
        document.getElementById("ketqua").innerHTML = sub2num
        }
        