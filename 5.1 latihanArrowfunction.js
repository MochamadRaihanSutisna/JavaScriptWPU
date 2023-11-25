// Function Expression

// const tampilNama = function(nama) {
//     return `Halo ${nama}`;
// }

//console.log(tampilNama("Raihan"));

//untuk dibikin Arrow function

// const tampilNama1 = (name) => {return `Halo, ${name}`;}
// console.log(tampilNama1("Avrilli"));

//jika lebih dari 2 value
    
// const tampilNama = (nama, waktu) => {
//     return `Selamat ${waktu}, ${nama}`;
// }

// console.log(tampilNama("Raihan", "Pagi"));

//=> Implisit Return
// const tampilNama1 = nama => `Halo, ${nama}`;
// console.log(tampilNama1("Dewi"));


let mahasiswa = ["Raihan", "Claude", "Cuys", "Albert"];

// let jumlahHuruf = mahasiswa.map(function(nama) {
//     return nama.length;
// });

// console.log(jumlahHuruf);

// => Diubah kedalam bentuk Arrowfunction

let jumlahHuruf = mahasiswa.map(nama => ({ nama: nama, jmlHuruf: nama.length}));
console.log(jumlahHuruf);
