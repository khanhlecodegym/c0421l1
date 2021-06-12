let n;
n=prompt("Nhập số:");

function ktraSonguyento(n){
    if(n>=2) {
        for (let i = 2; i<n; i++) {
            if (n%i ==0) {
                return false;
            }
        }
    }
    else{
        return false;
    }
    return true;
}
document.write(ktraSonguyento(n));