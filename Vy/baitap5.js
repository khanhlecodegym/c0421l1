let arr1=['Polaris', 'Aldebaran', 'Deneb', 'Vega', 'Altair', 'Dubhe', 'Regulus'];
let arr2=['Ursa Minor', 'Tarurus', 'Cygnus', 'Lyra', 'Aquila', 'Ursa Major', 'Leo'];
let s;
s=prompt("Nhập ngôi sao");
for (let i=0; i<arr1.length;i++){
    if(s===arr1[i]){
        document.write(arr2[i]);
    }
    else {
        document.write("Không tìm thấy");
        break
    }
}