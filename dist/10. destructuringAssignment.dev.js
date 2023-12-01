"use strict";

//Destructuring Variable / Assignment

/*
//Destructuring Array
const perkenalan = ["Halo", "nama", "saya", "Raihan"];

//const [salam, satu, dua, nama] = perkenalan

//Skipping Item
const [salam, , , nama] = perkenalan;
console.log(nama);


//Swap Item
let a = 1;
let b = 2;
console.log(a);
console.log(b);
[a,b] = [b,a];
console.log(b);
console.log(a);


//Return Value pada function
function coba() {
    return[1, 2];
}

const [a, b] = coba();
console.log(b);



//Rest Parameter
const [a, ...values] = [1, 2, 3, 4, 5];
console.log(a);
console.log(values);
*/
//Destructuring Object

/*
const mhs = {
    nama : "Raihan",
    umur : 33
}

const {nama, umur} = mhs;
console.log(nama);


//Assignment tanpa Deklarasi Object

({nama, umur} = { nama : "Raihan", umur : 33 });
console.log(nama);


//Assign ke variabel baru

const mhs = {
    nama : "hansoe",
    umur : 21
}

const {nama : n, umur : u} = mhs;
console.log(n)


//Memberikan Default Value
const mhs = {
    nama : "Raihan",
    umur : 33,
    email : "mochamadraihansutisna@gmail.com"
}

const {nama,  umur, email = "email@default.com"} = mhs;
console.log(email);



//Memberi nilai default + assign ke variabel baru

const mhs = {
    nama : "Raihan",
    umur : 33,
    email : "mochamadraihansutisna@gmail.com"
}

const {nama : n,  umur : u, email : e = "email@default.com"} = mhs;
console.log(e);



//Rest Parameter
const mhs = {
    nama : "Raihan",
    umur : 21,
    email : "mochamadraihansutisna@gmail.com"
}

const {nama, ...value} = mhs;
console.log(value)
*/
//Mengambil field pada object, setelah dikirim sebagai parameter untuk function 
var mhs = {
  id: 123,
  nama: "mochamad raihan sutisna",
  umur: 21,
  email: "mochamadraihansut@gmail.com"
};

function getIdMhs(_ref) {
  var id = _ref.id;
  return id;
}

console.log(getIdMhs(mhs));