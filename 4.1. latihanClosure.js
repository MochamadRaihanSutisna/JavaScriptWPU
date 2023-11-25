/*
function init() {
    let nama = "Raihan";
    
    function tampilNama() {
        console.log(nama);
    }
    tampilNama();
}
init();
*/

/*
function init() {
    function tampilNama(nama, umur) {
        console.log(`Perkenalkan nama saya ${nama}, saya berumur ${umur} tahun`)
    }
    return tampilNama;
}

let panggilNama = init();
panggilNama("galih", 21);
*/

/*
function ucapkanSalam(waktu) {
    return function (nama) {
        console.log(`Halo ${nama}! Selamat ${waktu}, semoga harimu menyenangkan`);
    }
}

let selamatPagi = ucapkanSalam(`Pagi`);
let selamatSiang = ucapkanSalam(`Siang`);
let selamatMalam = ucapkanSalam(`Malam`);


selamatPagi("Raihan");
*/

let add = function() {
    let counter = 0;
    
    return function() {
        return ++counter;
    }
}

let a = add();


console.log(a());
console.log(a());
console.log(a());