let arr=[],so,sum=0;
while(true){
    so=+prompt();
    arr.push(so);
    if(so===0){
        for (let i=0;i<arr.length;i++){
            sum+=arr[i];
        }
        break;

    }
}
document.write(sum);