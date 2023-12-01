//Desteucturing

function kalkulasi(a, b) {
    return [ a + b, a - b, a * b, a / b];
}

// const jumlah = penjumlahanPerkalian(2, 3)[0];
// const kali = penjumlahanPerkalian(2,3)[1];

const [jumlah, kali, kurang, bagi = "kosong"] = kalkulasi(2, 3);
console.log(jumlah);
console.log(kali);
console.log(kurang);
console.log(bagi);