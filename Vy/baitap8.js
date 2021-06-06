let x;
x=prompt("Nhập số");
function giaithua(x){
    let gt=1;
    if(x<=0){
        return false;
    }
    for(let i=1;i<=x;i++){
        gt*=i;
    }
    return gt;
}
document.write(giaithua(x));