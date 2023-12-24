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


const nama = document.querySelector(".nama");
const huruf = [...nama.textContent].map(h => `<span></span>`).join("");
console.log(huruf)


