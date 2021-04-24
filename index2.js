us = "Codegym";
pas = "Codegym";
let usname = document.getElementById("username");
let password = document.getElementById("password");
function DangNhap(){
    if (usname.value==us && password.value == pas) {

        document.write("Đăng Nhập Thành Công");
        
    }
    
    if(usname.value==us&&password.value!=pas ){
        document.write('sai password')
    }
    else {
        if(usname.value!=us&&password.value==pas){
            document.write("sai username")
         }
       else if(usname.value!=us&&password.value!=pas){
           document.write("sai cả hai");
       }
        
    }
    

}