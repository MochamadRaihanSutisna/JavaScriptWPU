"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

//Desteucturing
function kalkulasi(a, b) {
  return [a + b, a - b, a * b, a / b];
} // const jumlah = penjumlahanPerkalian(2, 3)[0];
// const kali = penjumlahanPerkalian(2,3)[1];


var _kalkulasi = kalkulasi(2, 3),
    _kalkulasi2 = _slicedToArray(_kalkulasi, 4),
    jumlah = _kalkulasi2[0],
    kali = _kalkulasi2[1],
    kurang = _kalkulasi2[2],
    _kalkulasi2$ = _kalkulasi2[3],
    bagi = _kalkulasi2$ === void 0 ? "kosong" : _kalkulasi2$;

console.log(jumlah);
console.log(kali);
console.log(kurang);
console.log(bagi);