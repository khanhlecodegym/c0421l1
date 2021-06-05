// //Tạo mảng
// let n;
// n=prompt('Nhập n');
// function creatArray(n) {
//     let arr=[];
//     for (let i=0;i<n;i++){
//         arr[i]=Math.round(Math.random()*100);
//     }
//     return arr;
// }
// let arr1=creatArray(n);
// document.write(arr1);
// // Tìm Min
// function timMin(arr){
//     let min=arr[0];
//     for(let i=1;i<arr.length;i++){
//         if(arr[i]<=min){
//             min=arr[i];
//         }
//     }
//     return min;
// }
// document.write("<br>");
// document.write("Min của mảng là: ",timMin(0));
//Kiểm tra số nguyên tố
// let n;
// n=prompt("Nhập số:");
// function ktraSonguyento(n){
//     if(n>=2) {
//         for (let i = 2; i<n; i++) {
//             if (n%i ==0) {
//                 return false;
//             }
//         }
//     }
//     else{
//         return false;
//         }
//     return true;
// }
// document.write(ktraSonguyento(n));