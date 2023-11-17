//Prototype

function Mahasiswa(nama, energi) {
    this.nama = nama;
    this.energi = energi;
    
};

Mahasiswa.prototype.makan = function(porsi) {
    this.energi += porsi;
    return `Halo ${this.nama}, Selamat Makan!`
};

Mahasiswa.prototype.main = function(jam) {
    this.energi -= jam;
    return `Halo ${this.nama}, Selamat Bermain!`
};

Mahasiswa.prototype.tidur = function(jam) {
    this.energi += jam * 2;
    return `Halo ${this.nama}, Selamat Beristirahat!`
};

let raihan = new Mahasiswa("Raihan", 25);
console.log(raihan.makan(10)); // 25 + 10
console.log(raihan.main(5)); // 35 - 5 
console.log(raihan);

console.log(raihan.tidur(8)); // 30 + (8 * 2)
console.log(raihan);

//class
/*
class Mahasiswa {
    constructor(nama, energi) {
        this.nama = nama;
        this.energi = energi;
    }
    
    makan(porsi) {
        this.energi += porsi;
        return `Halo ${this.nama}, Selamat makan!`
    };
    
    main(jam) {
        this.energi -= jam;
        return `Halo ${this.nama}, Selamat main!`
    };
    
    tidur(jam) {
        this.energi += jam * 2;
        return `Halo ${this.nama}, Selamat tidur!`
    };
};

let raihan = new Mahasiswa("Raihan Sutisna", 50);

console.log(raihan.main(20));

console.log(raihan.tidur(30));
console.log(raihan);

let angka= [1,2,3,4];
console.log(angka)
*/


