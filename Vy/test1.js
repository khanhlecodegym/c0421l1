let arr=[];
function addArr(){
    let s=document.getElementById("i1");
    arr.push(s.value);
    s.value="";
    return arr;
}
function show(){
    document.getElementById("sp1").innerHTML=arr;
}


