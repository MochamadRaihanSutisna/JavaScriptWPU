"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

//Spread Operator
// memecah iterables menjadi single element
// const mhs = ["Raihan", "Dika", "Riko"];
// console.log(...mhs[1]);
//Menggabungkan 2 array 
// const mhs = ["Raihan", "Risa", "Dewi"];
// const dosen = ["Shandika", "Eko", "Alfy"];
// const orang = [...mhs, "Riska", ...dosen];
// //const orang
// //const orang = mhs.concat(dosen);
// console.log(orang);
//Mengcopy Array
// const mhs = ["Raihan", "Ricki", "Eki"];
// // const mhs1 = mhs;
// const mhs1 = [...mhs]
// mhs[0] = "Fajar";
// console.log(mhs);
var nama = document.querySelector(".nama");

var huruf = _toConsumableArray(nama.textContent).map(function (h) {
  return "<span></span>";
}).join("");

console.log(huruf);