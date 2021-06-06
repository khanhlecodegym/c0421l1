let arr=["1","2","2","4"];
function daonguoc(arr){
    for(let i=0;i<arr.length/2;i++){
        let temp =arr[i];
        arr[i]=arr[arr.length-1-i];
        arr[arr.length-1-i]=temp;
    }
}
daonguoc(arr);
document.write(arr);

