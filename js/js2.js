// let element_Btn = '<button onclick="changeValue(this)"></button>';
// let domHtml = '';
// let isX = true;
// for (let i = 1; i <= 9; i++) {
//     domHtml += element_Btn;
//     if(i % 3 === 0) {
//         domHtml += '<br>'
//     }
// }

// document.write(domHtml);

// function changeValue(e) {
//     console.log(e);
//     e.textContent = isX == true ? "X" : "O";
//     isX = !isX;
//     e.style.background = getColor();
// }

// function getColor() {

//     return 'rgb(156, 183, 0)'
// }

// for(let i = 0; i < 10; i++) {
//     if(i % 2 == 0) {
//         continue;
//     }
//     console.log(i);
//     if (i == 7) {
//         break;
//     }
// }

// let i = 0;
// let sum = 0;
// while (true) {
//     let num = +prompt('nhap so', 0);
//     if (num == 0) break;
//     sum = sum + num;
// }

// let num = prompt('nhap vao so cua ban');

// for ( ; num <= 100; ) {
//     num = prompt('nhap sai nhap lai');
// }

// console.log(num);

for (let i = 0; i < 5; i++) {
  for (let j = 0; j< 5 ; j++) {
    let num = Math.round(Math.random() * 100);
    document.writeln(num);
  }
  document.write('<br>')
}
