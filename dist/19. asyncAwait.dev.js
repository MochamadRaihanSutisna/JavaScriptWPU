"use strict";

// const coba = new Promise (resolve => {
//     setTimeout(() => {
//         resolve("selesai")
//     }, 2000);
// });
// console.log(coba);
// coba.then(() => console.log(coba));
function cobaPromise() {
  return new Promise(function (resolve, reject) {
    var waktu = 6000;

    if (waktu < 5000) {
      setTimeout(function () {
        resolve("selesai");
      }, 2000);
    } else {
      reject("kelamaan!");
    }
  });
} // const coba = cobaPromise();
// coba
//     .then(() => console.log(coba))
//     .catch(() => console.log(coba));


function cobaAsync() {
  var coba;
  return regeneratorRuntime.async(function cobaAsync$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(cobaPromise());

        case 3:
          coba = _context.sent;
          console.log(coba);
          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
}

cobaAsync();