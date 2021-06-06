let arr=[".",",","!","1","%"];
let a=prompt("Nhập kí tự");
function timKitu(arr,a){
    let dem=0;
    for(let i=0;i<arr.length;i++){
        if(a==arr[i]){
           dem+=1;
        }
    }
    if(dem>0){
        return dem;
    }
    else {
        return -1;
    }
}
document.write(timKitu(arr,a));