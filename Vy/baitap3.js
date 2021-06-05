let a;
let b;
a=+prompt("Nhập a: ");
b=+prompt("Nhập b: ");
function tong2so(a,b){
    if(a<b){
        alert("Không phù hợp");
        a=+prompt("Nhập a: ");
        b=+prompt("Nhập b: ");
    }
    else {
        return a+b;
    }
}
document.write("câu 3: ");
document.write(tong2so(a,b));