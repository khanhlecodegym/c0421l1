let n;
n=+prompt("Nhập n");
function xaydungMang(n){
    let arr=[];
    for(let i=0;i<n;i++){
        let gt=Math.round(Math.random()*100);
        arr.push(gt);
    }
    return arr;
}
let arr1=xaydungMang(n)
document.write("Mảng: ")
document.write(arr1);
function min(arr){
    let min=arr[0];
    for(let i=1;i<arr.length;i++){
        if(arr[i]<=min){
            min=arr[i];
        }
    }
    return min;
}
document.write("<br>");
document.write("Giá trị nhỏ nhất của mảng: ",min(arr1),"<br>");
let s;
s=prompt("Nhập số ");
function timVitri(arr,s){
    let d=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]===s){
            document.write(i);
        }
    }
}
document.write("Vị trí của ",s," trong mảng là: ",timVitri(arr1,s));