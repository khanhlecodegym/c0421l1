let a,b;
a=+prompt("Nhập a");
b=+prompt("Nhập b");
function swap(a,b){
    let temp=a;
    a=b;
    b=temp;
    document.write("kết quả: ",a," ",b);
}
swap(a,b);
