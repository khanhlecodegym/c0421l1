let r;
r=prompt("Nhập bán kính ");
function dt_cvHinhtron(r){
    let dt=0, cv=0;
    dt=3.14*r*r;
    cv=2*3.14*r;
    document.write("Diện tích: ",dt+"<br>");
    document.write("Chu vi: ",cv);
}
dt_cvHinhtron(r);