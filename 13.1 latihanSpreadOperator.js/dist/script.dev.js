"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

// const liMhs = document.querySelectorAll("li");
//console.log(liMhs[0].textContent);
// const mhs = [];
// for (let i = 0; i < liMhs.length; i++) {
//     mhs.push(liMhs[i].textContent);
// }
// console.log(mhs)
// const mhs = [...liMhs].map(m => m.textContent);
// console.log(limhs);
var nama = document.querySelector(".nama");

var huruf = _toConsumableArray(nama.textContent).map(function (h) {
  return "<span>".concat(h, "</span>");
}).join("");

console.log(huruf);
nama.innerHTML = huruf;