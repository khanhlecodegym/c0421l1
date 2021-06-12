function MyDate(day,month,year){
    this.day=day;
    this.month=month;
    this.year=year;

    this.getDate=()=>{
        return this.day;
    }
    this.getMonth=()=>{
        return this.month;
    }
    this.getYear=()=>{
        return this.year;
    }
    this.setDay=(day1)=>{
        this.day=day1;
    }
    this.setMonth=(month1)=>{
        this.month=month1;
    }
    this.setYear=(year1)=>{
        this.year=year1;
    }
    this.setDate=(day,month,year)=>{
        this.day=day;
        this.month=month;
        this.year=year;
    }
}
let date = new MyDate(2, 2, 2007);
let day=date.getDate().toString();
let month=date.getMonth().toString();
let year=date.getYear().toString();
document.write(day + "/" + month + "/" + year,"<br>");
date.setDay(10);
date.setMonth(10);
date.setYear(2019);
document.write(date.day + "/" + date.month + "/" + date.year,"<br>");
date.setDate(18,2,2000);
document.write(date.day + "/" + date.month + "/" + date.year,"<br>");
let date2=new Date("'"+day+"-"+month+"-"+year+"'");
document.write(date2.toDateString());
