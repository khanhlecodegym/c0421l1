function Circle(r,color){
    this.radius=r;
    this.color=color;

    this.getRadius=()=>{
        return this.radius;
    }
    this.getArea=()=>{
        return Math.PI*this.radius*this.radius;
    }
}
let c1=new Circle(10,"blue")
document.write("Hình tròn thứ nhất","<br>");
document.write("Bán kính là: ",c1.getRadius(),"<br>");
document.write("Diện tích là: ",c1.getArea());
