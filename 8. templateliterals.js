//Template Literal / Template String

//Template literal adalah string literal yang memungkinkan adanya expression didalamnya

/*
Template Literal
 > Menggunakan `` BackTick
 > Multi-line String
 > Embedded Expression
 > HTML Fragments
 > Experession interpolation
 > Tagged Template

*/

// Template Literals / Template String

// const nama = "Sandhika";
// const umur = 33;
// console.log(`Halo, nama saya ${nama}, dan saya ${umur} tahun.`);
// console.log('Halo, nama saya ' + nama + ', dan saya ' + umur + ' tahun.');

// Embedded Expression
// console.log(`${1 + 1}`);
// console.log(`${alert("Halo!")}`);
    
const x = 11;
console.log(`${(x % 2 == 0) ? "Genap" : "Ganjil"}`);
/*
//HTML Fragments
const mhs = {
    nama: "Mochamad Raihan Sutisna",
    umur: "21",
    nrp: "2030405005",
    email: "mochamadraihansutisna@gmail.com"
};

const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="nrp">${mhs.nrp}</span>
</div>`;

console.log(el);
*/