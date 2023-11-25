//Konses This pada Arrow Function

//*Constructor Function*
// const Mahasiswa = function() {
//     this.nama = "Raihan";
//     this.umur = 21;
//     this.sayHello = function() {
//         console.log(`Halo nama saya ${this.nama}, umur saya saat ini ${this.umur} tahun`);
//     }
// }

// const hansooee = new Mahasiswa();
// hansooee.sayHello();


//*Object Literal*

// const mhs1 = {
//     nama: "Raihan",
//     umur: 21,
//     sayHello: () => {
//         console.log(`Halo, Perkenalkan nama Saya ${this.nama}, saya saat ini sudah menginjak diumur ${this.umur} tahun`);
//     }
// }
// mhs1.sayHello();


const Mahasiswa = function() {
    this.nama = "Raihan";
    this.umur = 21;
    this.sayHello = function() {
        console.log(`Halo, perkenalkan nama saya ${this.nama} saya berumur ${this.umur} tahun`);
    }
    
    setInterval(() => {
        console.log(this.umur++);
    }, 1000);
    
}

const Hansooee = new Mahasiswa(); 