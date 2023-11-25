"use strict";

// ambil semua elemen video
var videos = Array.from(document.querySelectorAll('[data-duration]')); // pilih hanya yang "JavaScript Lanjutan"

var jsLanjut = videos.filter(function (video) {
  return video.textContent.includes("JAVASCRIPT LANJUTAN");
}) // ambil durasi masing2 video
.map(function (item) {
  return item.dataset.duration;
}) //ubah durasi menjadi float, ubah menit menjadi detik
.map(function (waktu) {
  // 10:30 -> [10, 30] split
  var parts = waktu.split(":").map(function (part) {
    return parseFloat(part);
  });
  return parts[0] * 60 + parts[1];
}) // jumlahkan semua detik
.reduce(function (total, detik) {
  return total + detik;
}); // ubah formatnya jadi jam menit detik

var jam = Math.floor(jsLanjut / 3600);
jsLanjut = jsLanjut - jam * 3600;
var menit = Math.floor(jsLanjut / 60);
var detik = jsLanjut - menit * 60; // simpan di DOM

var pDurasi = document.querySelector(".total-durasi");
pDurasi.textContent = "".concat(jam, " Jam, ").concat(menit, " Menit, ").concat(detik, " Detik.");
var jmlVideo = videos.filter(function (video) {
  return video.textContent.includes("JAVASCRIPT LANJUTAN");
}).length;
var pJmlVideo = document.querySelector(".jumlah-video");
pJmlVideo.textContent = "".concat(jmlVideo, " Video");
console.log(detik);