function eventOne() {      
    let name = document.getElementById('name').value;
    let password = document.getElementById('pass').value;
    if(name == 'codegym' && password == 123456){
        document.write("Đăng nhập thành công");
    }
    else {
        if(name != 'codegym' && password != 123456){
            document.write("Sai rồi");
        }
        else 
        document.write("Tên đăng nhập hoặc mật khẩu sai!!! mời nhập lại");
       
    } 
}