


let intro = "Welcome to Học Bằng Lái Xe";
document.getElementById("intro").innerHTML = intro;

let past = document.getElementById("past");
past.addEventListener("mouseover", mouseover);
past.addEventListener("mouseout", mouseout);
past.addEventListener("click", clickFunction);


function mouseover() {
    document.getElementById("past").style.color = "blue";

}
function mouseout() {
    document.getElementById("past").style.color = "green";
}
function clickFunction() {
    alert("Hello man. Welcome to Hiếu Tổ Lái")

}

// window.setTimeout("showTime()", 1000);
function getVNTime() {
    let time = new Date();
    let dow = time.getDay();
    if (dow == 0)
        dow = "Chủ nhật";
    else if (dow == 1)
        dow = "Thứ hai";
    else if (dow == 2)
        dow = "Thứ ba";
    else if (dow == 3)
        dow = "Thứ tư";
    else if (dow == 4)
        dow = "Thứ năm";
    else if (dow == 5)
        dow = "Thứ sáu";
    else if (dow == 6)
        dow = "Thứ bảy";
    let day = time.getDate();
    let month = time.getMonth() + 1;
    let year = time.getFullYear();
    let hr = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    day = ((day < 10) ? "0" : "") + day;
    month = ((month < 10) ? "0" : "") + month;
    hr = ((hr < 10) ? "0" : "") + hr;
    min = ((min < 10) ? "0" : "") + min;
    sec = ((sec < 10) ? "0" : "") + sec;
    return dow + " " + day + "/" + month + "/" + year + " " + hr + ":" + min + ":" + sec;
}
function showTime() {
    let vnclock = document.getElementById("vnclock");
    if (vnclock != null)
        vnclock.innerHTML = getVNTime();
    // setTimeout("showTime()", 1000);
}


let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let sum2num = document.getElementById("result");

function resetForm() {
    document.getElementsByName("input").value = "";

}

function sum() {
    console.log(parseInt(num1.value) + parseInt(num2.value));
    sum2num.textContent = parseInt(num1.value) + parseInt(num2.value);
}

let num3 = document.getElementById("num3");
let num4 = document.getElementById("num4");
let tru2num = document.getElementById("bmw");


function tru() {
    console.log(parseInt(num5.value) - parseInt(num6.value));
    tru2num.textContent = parseInt(num3.value) - parseInt(num4.value);
}
let num5 = document.getElementById("num5");
let num6 = document.getElementById("num6");
let nhan2num = document.getElementById("vinfast");


function nhan() {
    console.log(parseInt(num5.value) * parseInt(num6.value));
    nhan2num.textContent = parseInt(num5.value) * parseInt(num6.value);
}

let num7 = document.getElementById("num7");
let num8 = document.getElementById("num8");
let chia2num = document.getElementById("cadilac");


function chia() {
    console.log(parseInt(num7.value) / parseInt(num8.value));
    chia2num.textContent = parseInt(num7.value) / parseInt(num8.value);
}