//for..of

//Array
// const mhs = ["Raihan", "Riko", "Riswaldi"];

// for (let i = 0; i < mhs.length; i++) {
//     console.log(mhs[i])
// }

// mhs.forEach(m => console.log(m));

// for (const m of mhs) {
//     console.log(m);
// }

//String
// const nama = "Mochamad Raihan";
// for (const n of nama) {
//     console.log(n)
// }

// const mhs = [ "Raihan", "Riko", "Riki"];
// mhs.forEach((m, i) => {
//     console.log(`${m} adalah mahasiswa ke - ${i + 1}`);
// });

// for (const [i, m] of mhs.entries()) {
//     console.log(`${m} adalah mahasiswa ke - ${i + 1}`);
// }



//NodeList
// const liNama = document.querySelectorAll(".nama");

// liNama.forEach(n => console.log(n.textContent));
// for (n of liNama) {
//     console.log(n.innerHTML);
// }



//Arguments
// function jumlahkanAngka() {
    //return arguments.reduce((a, i) => a + i);
    //arguments.forEach(a => jumlah += a);
//     let jumlah = 0;
    
//     for ( a of arguments) {
//         jumlah += a;
//     }
//     return jumlah;
// }

// console.log(jumlahkanAngka(1, 2, 3, 4, 5));


//for..in

const mhs = {
    nama : "Mochamad Raihan Sutisna",
    umur : 21,
    email : "mochamadraihansutisna@gmail.com"
}

for (m in mhs) {
    console.log(mhs[m])
}