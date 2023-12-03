"use strict";

//Destructuring
// function kalkulasi(a, b) {
//     return [ a + b, a - b, a * b, a / b];
// }
// const jumlah = penjumlahanPerkalian(2, 3)[0];
// const kali = penjumlahanPerkalian(2,3)[1];
// const [jumlah, kali, kurang, bagi = "kosong"] = kalkulasi(2, 3);
// console.log(jumlah);
// console.log(kali);
// console.log(kurang);
// console.log(bagi);
// const [tambah, kurang, kali, bagi = "tidak ada"] = kalkulasi(2,3);
// console.log(bagi);
// function kalkulasi (a,b) {
//     return {
//         tambah : a + b,
//         kurang : a - b,
//         kali : a * b,
//         bagi : a / b 
//     }
// }
// const { bagi, tambah, kali, kurang } = kalkulasi (2,3);
// console.log(kurang);
//Destructuring Function Arguments
var mhs1 = {
  nama: "Mochamad Raihan Sutisna",
  umur: 21,
  email: "mochamadraihansutisna@gmail.com",
  nilai: {
    tugas: 80,
    uts: 85,
    uas: 90
  }
}; // function cetakMhs(nama, umur) {
//     return `Hallo, perkenalkan nama saya ${nama}, saya saat ini berumur ${umur} tahun.`
// }
// console.log(cetakMhs(mhs1.nama, mhs1.umur));
// Cara lain ->
// const mhs1 = {
//     nama : "Mochamad Raihan Sutisna",
//     umur : 21,
//     email : "mochamadraihansutisna@gmail.com"
// }
// function cetakMhs(mhs) {
//     return `Hallo, perkenalkan nama saya ${mhs.nama}, saya saat ini berumur ${mhs.umur} tahun.`
// }
// console.log(cetakMhs(mhs1));

function cetakMhs(_ref) {
  var nama = _ref.nama,
      umur = _ref.umur,
      _ref$nilai = _ref.nilai,
      tugas = _ref$nilai.tugas,
      uts = _ref$nilai.uts,
      uas = _ref$nilai.uas;
  return "Hallo, perkenalkan nama saya ".concat(nama, ", saya saat ini berumur ").concat(umur, " tahun. dan nilai uas saya adalah ").concat(uas, ".");
}

console.log(cetakMhs(mhs1));