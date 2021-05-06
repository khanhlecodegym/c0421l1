let arrNum = [];
let animals = ['Chuột', 'Mèo', 'Cọp'];

// console.log(animals[0]);
// console.log(animals[1]);
// console.log(animals[2]);

animals[0] = "Tý";
animals[2] = "Hổ";
console.log(animals);
console.log(animals.length);

animals.push("Trâu");
console.log(animals);

// let name =  animals.pop();
// alert(name);
console.log(animals);
animals.unshift("Bò");
console.log(animals);

for (let i = 0; i < animals.length; i++) {
    document.writeln(animals[i]);
}

animals.push('Chó');

let ranNum = Math.floor( Math.random()*20);

