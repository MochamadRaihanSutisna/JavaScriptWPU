//Lexical Scope => Perlingkupan Leksikal
/*
function cloSures () {
    let nama = "Mochamad Raihan Sutisna"; //Local Variable
    function tampilNama() { //Inner Function (Closure*)
        console.log(nama); //Akses ke parent variable
    }
    tampilNama();
}

cloSures();
*/

//Closure => Penutupan
/*
function ucapkanSalam(waktu) {
    return function(nama) {
        console.log(`Halo ${nama}, Selamat ${waktu}, semoga harimu menyenangkan`);
    }
}

let selamatPagi = ucapkanSalam("Pagi");
let selamatSiang = ucapkanSalam("Siang");
let selamatMalam = ucapkanSalam("Malam");

selamatPagi(`Sandhika`);
selamatMalam("Raihan");
*/

let add = (function() {
    let counter = 0;
    return function() {
        return ++counter;
    }
})();

console.log(add());
console.log(add());
console.log(add());