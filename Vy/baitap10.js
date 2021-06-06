let a,b,c;
a=prompt("Nhập a");
b=prompt("Nhập b");
c=prompt("Nhập c");
function timMin(a,b,c){
    let min=a;
    if(min>b){
        min=b;
    }
    else {
        if(min>c){
            min=c;
        }
    }
    return min;
}
document.write(timMin(a,b,c));