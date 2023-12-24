"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// Rest Parameter 
// function myFunc() {
//     // return `a = ${a}, b = ${b}, myArgs = ${myArgs}`;
//     // return myArgs;
//     // return Array.from(arguments);
//     return [...arguments];
// }
// console.log(myFunc(1, 2, 3, 4,5));
// function jumlahkan(...angka) {
//     let total = 0;
//     for (const a of angka) {
//         total += a;
//     }
//     return total;
//     return angka.reduce((a,b) => a + b);
// }
// console.log(jumlahkan(1, 2, 3, 4, 5));
// Array Destructuring
// const kelompok1 = ["Raihan", " Rizki", "Bayu", "Dewi", "Avrilli"];
// const [ketua, wakil, ...anggota] = kelompok1;
// console.log(anggota);
// Object Destructuring
// const team = {
//     pm: "Dewi Salwa",
//     frontEnd1: "Indra",
//     frontEnd2: "Rizki Mukti",
//     backEnd:"raihanSu",
//     ux: "Avrilli",
//     devOps: "Bayu Pamungkas"
// }
// const {pm, ...myTeam} = team;
// console.log(myTeam);
// Filtering
function filterBy(type) {
  for (var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }

  return values.filter(function (v) {
    return _typeof(v) === type;
  });
}

console.log(filterBy("boolean", 1, 2, "Raihan", false, 10, true, "Dewi"));