let s;
s=+prompt("Nhập số");
function ktNguyenduong(x){
    if(x===(parseInt(x))&& x>0){
        document.write("là số nguyên dương");
    }
    else {
        document.write("ko phải là số nguyên dương");
    }
}
ktNguyenduong(s);