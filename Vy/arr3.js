let n=Math.round(Math.random()*20), arr=[],sum1=0,sum2=0;
for(let i=0;i<n;i++){
    let gt=Math.round(Math.random()*100);
    arr.push(gt);
}
document.write("Số phần tử của mảng: ",n,"<br>");
document.write("Mảng: ",arr,"<br>");
for (let i=0;i<arr.length;i++){
    if(arr[i]%2===0){
        sum1+=arr[i];
    }
    if(arr[i]%2!==0){
        sum2+=arr[i];
    }
}
document.write("Tổng lẻ: ",sum2);
document.write("<br>");
document.write("Tổng chẵn: ",sum1);