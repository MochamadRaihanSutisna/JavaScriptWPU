// const liMhs = document.querySelectorAll("li");
//console.log(liMhs[0].textContent);

// const mhs = [];
// for (let i = 0; i < liMhs.length; i++) {
//     mhs.push(liMhs[i].textContent);
    
// }

// console.log(mhs)

// const mhs = [...liMhs].map(m => m.textContent);
// console.log(limhs);

const nama = document.querySelector(".nama");
const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join("");
console.log(huruf); 
nama.innerHTML = huruf;