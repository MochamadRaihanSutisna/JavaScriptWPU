"use strict";

function _templateObject() {
  var data = _taggedTemplateLiteral(["Halo, nama saya ", ", saya ", " tahun."]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var nama = "Mochamad Raihan Sutisna";
var umur = 21;

function highlight(strings) {
  for (var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }

  // let result = "";
  // strings.forEach((str, i) => {
  //     result += `${str}${values[i] || ""}`; 
  // });
  // return result;
  return strings.reduce(function (result, str, i) {
    return "".concat(result).concat(str, "<span></span>").concat(values[i] || '');
  }, '');
}

var str = highlight(_templateObject(), nama, umur);
console.log(str);