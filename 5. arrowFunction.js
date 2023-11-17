/*
//Function Expression

let tampilPesan = function (nama) {
    console.log("Halo " + nama);
}

tampilPesan("Raihan");

//Arrow Function

let tampilkanNama = (nama, waktu) => {console.log(`Halo ${nama} Selamat ${waktu} `)};

tampilkanNama("Sandhika", "Malam");

//implisit return
const perKenalan = name =>  `Perkenalkan nama saya ${name}` //tanpa perlu kurung dan return

console.log(perKenalan("Salsha"));

const latihan = () => "Hello World";
console.log(latihan());
*/


let mahasiswa = ["Shandika Galih", "Dewi Salwa Waenurlillah", "Salsa"];

/*
let jumlahHuruf = mahasiswa.map(function(nama) {
    return nama.length;
});

console.log(jumlahHuruf); 
*/

let jumlahHuruf = mahasiswa.map(nama => ({ nama: nama, jmlHuruf: nama.length}));
console.log(jumlahHuruf)
