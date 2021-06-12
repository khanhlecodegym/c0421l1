let n=+prompt("nhập số: ");
function sohoanhao(n){
    let s=0;
    for(let i=1;i<n;i++){
       if(n%i===0) {
           s=s+i;
       }
    }
    if(n<0){
        return false;
    }
    if(s===n){
        return true;
    }
    else {
        return false;
    }
}
document.write(sohoanhao(n));