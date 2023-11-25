"use strict";

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
var nama = "Sandhika";
var umur = 33;
console.log("Halo, nama saya ".concat(nama, ", dan saya ").concat(umur, " tahun."));
console.log('Halo, nama saya ' + nama + ', dan saya ' + umur + ' tahun.');
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