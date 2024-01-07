// $.ajax({
//     url: "http://www.omdbapi.com/?apikey=986faee0&s=",
//     success: movies => console.log(movies)
    
// });


// Vanilla JavaScript

// const xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function() {
//     if (xhr.status === 200) {
//         if (xhr.readyState === 4) {
//             console.log(JSON.parse(xhr.response));
//         }
//     } else {
//         console.log(xhr.responseText);
//     }
// }

// xhr.open("get", "http://www.omdbapi.com/?apikey=986faee0&s=");
// xhr.send();

// fetch("http://www.omdbapi.com/?apikey=986faee0&s=")
//     .then(response => response.json());
//     .then(response => console.log(response));

//Promise

// Object yang merepresentasikan keberhasilan / kegagalan sebuah event asynchronous di masa yang akan datang 
// janji (terpenuhi / ingkar);
// states (fulfilled / rejected / pending);
// callback (resolve / reject / finally);
// aksi (then / catch);

//consoh 1
// let ditepati = false; 
// const janji1 = new Promise((resolve, reject) => {
//     if(ditepati) {
//         resolve("Janji telah di tepati");
//     }else {
//         reject("Ingkar Janji...");
//     }
// });

// janji1
//     .then(response => console.log("OK! : " + response))
//     .catch(response => console.log("NOT OK! : " + response));


// contoh 2 

// let ditepati = true
// const janji2 = new Promise((resolve, reject) => {
//     if( ditepati ) {
//         setTimeout(() => {
//             resolve("Ditepati setelah beberapa waktu!");
//         }, 2000);
//     } else {
//         setTimeout(() => {
//             resolve("Tidak ditepati setelah beberapa waktu!");
//         }, 2000);
//     }
// });

// console.log("Mulaii");
//  console.log(janji2.then(() => console.log(janji2)));
// janji2
//     .finally() => console.log("Selesai menuggu !")
//     .then(response => console.log("Ok! : " + response))
//     .catch(response => console.log("NOT OK! : " + response))
// console.log("Selesai");

// Promise.all(
    
const film = new Promise(resolve => {
    setTimeOut(() => {
        resolve([{
            judul : "Avengers",
            sutradara : "Mochamad Raihan Sutisna",
            pemeran : "Jeksen, Robert" 
        }])
    }, 1000);
});


const cuaca = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            kota : "Bandung",
            temperatur : 26,
            kondisi : "Cerah berawan"
        }])
    }, 500);
});

// film.then(response => console.log(response));
// cuaca.then(response => console.log(response));

Promise.all([film, cuaca])
    // .then(response => console.log(response));
    .then(response => {
        const [film, cuaca] = response;
        console.log(film)
        console.log(cuaca)
    })