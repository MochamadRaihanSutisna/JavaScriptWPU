//Konsep This pada Arrow function

//Constructor Function
const Mahasiswa = function() {
    this.nama = "Raihan";
    this.umur = 21;
    this.sayhello = function () {
        console.log(`Perkenalkan nama saya ${this.nama}, umur saya saat ini ${this.umur} tahun`);
    }   
    
    setInterval(() => {
        console.log(this.umur++);
    }, 1000);
}

const raihanSu = new Mahasiswa();
console.log(raihanSu.sayhello());

/*
const namaMahasiswa = {
    namaLengkap: "Mochamad Raihan Sutisna",
    umurSekarang: 20,
    sayHai: function () {
        console.log(`Halo nama saya ${namaLengkap} umur saya sekarang menginjak ${umurSekarang}`);
    }
}

console.log(namaMahasiswa.sayHai());
*/