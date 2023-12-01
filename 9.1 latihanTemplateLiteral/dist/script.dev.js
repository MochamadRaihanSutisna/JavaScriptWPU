"use strict";

function _templateObject() {
  var data = _taggedTemplateLiteral(["Halo, nama saya ", ", saya ", " tahun. dan email saya adalah : ", ""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

//HighLight
var nama = "Mochamad Raihan Sutisna";
var umur = 21;
var email = "mochamadraihansutisna@gmail.com";

function highlight(strings) {
  for (var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }

  return strings.reduce(function (result, str, i) {
    return "".concat(result).concat(str, "<span class=\"h1\">").concat(values[i] || '', "</span>");
  }, '');
}

var str = highlight(_templateObject(), nama, umur, email);
console.log(str);
document.body.innerHTML = str;