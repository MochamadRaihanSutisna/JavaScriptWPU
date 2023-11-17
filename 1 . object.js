// Cara Membuat Object pada JavaScript
//1. Object Literal => PROBLEM : Tidak efektif untuk object yang banyak

/*
let Mahasiswa = {
    nama: "Raihan",
    energi: 20,
    makan: function(porsi) {
        this.energi = this.energi + porsi;
        console.log(`Hai ${this.nama} Selamat Makan`);
    },
    main: function(jam) {
        this.energi -= jam * 2;
        console.log(`Halo ${this.nama} Selamat Bermain`);
    }
}

Mahasiswa.makan(10);
console.log(Mahasiswa);
Mahasiswa.main(4);
console.log(Mahasiswa);


let mahasiswa1 = { 
    nama: "Rosa",
    energi: 21,
    makan: function(porsi) {
        this.energi = this.energi + porsi;
        console.log(`Hallo ${this.nama} selamat makan`);
    },
    main: function(kegiatan) {
        this.energi = this.energi + kegiatan;
        console.log(`hai ${this.nama} Selamat beraktifitas`);
    }
}

mahasiswa1.makan(2);
mahasiswa1.main(5);
console.log(mahasiswa1);
*/



//2. Function Declaration => PROBLEM : Tidak efektif untuk object yang banyak
/*
function Mahasiswa(nama, energi) {
    let mahasiswa1 = {};
    mahasiswa1.nama = nama;
    mahasiswa1.energi = energi;
    
    mahasiswa1.makan = function(porsi) {
        this.energi += porsi;
        console.log(`Halo ${this.nama}, selamat menikmati!`);
    }    
        
    mahasiswa1.main = function(jam) {
            this.energi -= jam;
            console.log(`halo ${this.nama} selamat bermain!`);
    }
    return mahasiswa1;
}

let raihan = Mahasiswa("Raihan", 30);
raihan.makan(20);
console.log(raihan);

raihan.main(10);
console.log(raihan)



let loki = Mahasiswa("Loki", 20);
loki.makan(10)
console.log(loki);

loki.main(5);
console.log(loki);
*/

//3. Constructor Function
/*
function Mahasiswa(nama, energi) {
    let mahasiswa1 = {};
    this.nama = nama;
    this.energi = energi;
    
    this.makan = function(porsi) {
        this.energi += porsi;
        console.log(`Halo ${this.nama}, selamat makanyah!`);
    }    
        
    this.main = function(jam) {
            this.energi -= jam;
            console.log(`halo ${this.nama} selamat bermain!`);
    }    
}


let hansooe = new Mahasiswa("Mochamad Raihan Sutisna", 20 );

hansooe.main(5);
console.log(hansooe);

let riko = new Mahasiswa("Riko", 23);
console.log(riko);
riko.makan(23);
console.log(riko);
*/

//4. Object.create()

const methodMahasiswa = {
    makan: function(porsi) {
        this.energi += porsi;
        console.log(`Halo ${this.nama} selamat makan!`);
    },
    main: function(jam) {
        this.energi -= jam;
        console.log(`Halo ${this.nama} Selamat Bermain`);
    },
    
    tidur: function (jam) {
        thi.energi += jam * 2;
        console.log(`Halo ${this.nama} Selamat Tidur`);
    },
};

function Mahasiswa (nama, energi) {
    let mahasiswa1 = Object.create(methodMahasiswa);
    
    mahasiswa1.nama = nama;
    mahasiswa1.energi = energi;
    
    return mahasiswa1;
};

let raihan = Mahasiswa("Raihan", 20);
console.log(raihan);
raihan.main(10);
console.log(raihan);