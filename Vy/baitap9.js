let x;
x=prompt("Nhập số");
function ktso(){
    if(isNaN(x)){
        return false;
    }
    else {
        return true;
    }
}
document.write(ktso(x));