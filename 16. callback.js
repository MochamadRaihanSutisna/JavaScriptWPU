//Callback
// Synchronous Callback
// function halo(nama) {
//     alert(`Halo, ${nama}`);
// }

// function tampilkanPesan(callback) {
//     const nama = prompt(`Masukkan Nama :`);
//     callback(nama);
// }

// tampilkanPesan(nama => alert(`Halo, ${nama}`));

// const mhs =  [
//     {
//         "nama" : "Mochamad Raihan Sutisna",
//         "nrp" : "020304003",
//         "email" : "mochamadraihansutisna@gmail.com",
//         "jurusan" : "Sistem informasi",
//         "idDosenWali" : 1
//     },
    
//     {
//         "nama" : "Dewi Salwa Waenurlillah",
//         "nrp" : "020304002",
//         "email" : "dewisalwawaenurlillah@gmail.com",
//         "jurusan" : "Pendidikan Guru Bahasa Inggris",
//         "idDosenWali" : 2
//     },
    
//     {
//         "nama" : "Rizki Muhammad Mukti",
//         "nrp" : "020304003",
//         "email" : "rizkimuhammadmukti@gmail.com",
//         "jurusan" : "Teknik Informatika",
//         "idDosenWali" : 3
//     }
//     ];
    
    
//     console.log("Mulai");
//     mhs.forEach( m => {
//         for (let i = 0; i < 1000000; i++) {
//             let date = new Date;
//         }
//         console.log(m.nama);
//     });
//     console.log("Selesai");


// Asynchronous CallBack
function getDataMahasiswa(url, success, error) {
    let xhr = new xhrHttpRequest;
    
    xhr.onReadyStateChange = function() {
        if(xhr.readyState === 4 ) {
            if(xhr.status === 200) {
                success(xhr.response);
            } else if (xhr.status === 400) {
                error();
            }
        }
    }
    
    xhr.open("get", url);
    xhr.send();
}




getDataMahasiswa("data/mahasiswa.json", results => {
    console.log(results);
}, () => {
    
});


//Callback
// Synchronous Callback
// function halo(nama) {
//     alert(`Halo, ${nama}`);
// }

// function tampilkanPesan(callback) {
//     const nama = prompt(`Masukkan Nama :`);
//     callback(nama);
// }

// tampilkanPesan(nama => alert(`Halo, ${nama}`));

// const mhs =  [
// {
//     "nama" : "Mochamad Raihan Sutisna",
//     "nrp" : "020304003",
//     "email" : "mochamadraihansutisna@gmail.com",
//     "jurusan" : "Sistem informasi",
//     "idDosenWali" : 1
// },

// {
//     "nama" : "Dewi Salwa Waenurlillah",
//     "nrp" : "020304002",
//     "email" : "dewisalwawaenurlillah@gmail.com",
//     "jurusan" : "Pendidikan Guru Bahasa Inggris",
//     "idDosenWali" : 2
// },

// {
//     "nama" : "Rizki Muhammad Mukti",
//     "nrp" : "020304003",
//     "email" : "rizkimuhammadmukti@gmail.com",
//     "jurusan" : "Teknik Informatika",
//     "idDosenWali" : 3
// }
// ];


// console.log("Mulai");
// mhs.forEach( m => {
//     for (let i = 0; i < 1000000; i++) {
//         let date = new Date;
//     }
//     console.log(m.nama);
// });
// console.log("Selesai");

//Asynchronous CallBack
// function getDataMahasiswa(url, success, error) {
//     let xhr = new XMLHttpRequest();
    
//     xhr.onreadystatechange = function() {
//         if(xhr.readyState === 4 ) {
//             if(xhr.status === 200) {
//                 success(xhr.response);
//             } else if (xhr.status === 400) {
//                 error();
//             }
//         }
//     }
    
//     xhr.open("get", url);
//     xhr.send();
// }


// console.log("Mulai");
// getDataMahasiswa("data/mahasiswa.json", results => {
//     const mhs = JSON.parse(results);
//     mhs.forEach(m => console.log(m.nama));
    
// }, () => { 
// });
// console.log("selesai")


//JQuery
// console.log("Mulai");
// $.ajax({
//     url: "data/mahasiswa.json",
//     success: (mhs) => {
//         mhs.forEach(m => console.log(m.nama));
//     },
//     error: (e) => {
//         console.log(e.responeText)
//     }
// });

// console.log("Selesai");





