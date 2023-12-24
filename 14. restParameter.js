// Rest Parameter 

// function myFunc() {
//     // return `a = ${a}, b = ${b}, myArgs = ${myArgs}`;
//     // return myArgs;
//     // return Array.from(arguments);
    
//     return [...arguments];
// }


// console.log(myFunc(1, 2, 3, 4,5));

// function jumlahkan(...angka) {
//     let total = 0;
//     for (const a of angka) {
//         total += a;
//     }
    
//     return total;
//     return angka.reduce((a,b) => a + b);
// }

// console.log(jumlahkan(1, 2, 3, 4, 5));


// Array Destructuring
// const kelompok1 = ["Raihan", " Rizki", "Bayu", "Dewi", "Avrilli"];
// const [ketua, wakil, ...anggota] = kelompok1;
// console.log(anggota);


// Object Destructuring
// const team = {
//     pm: "Dewi Salwa",
//     frontEnd1: "Indra",
//     frontEnd2: "Rizki Mukti",
//     backEnd:"raihanSu",
//     ux: "Avrilli",
//     devOps: "Bayu Pamungkas"
// }


// const {pm, ...myTeam} = team;
// console.log(myTeam);



// Filtering
function filterBy(type, ...values) {
    return values.filter(v => typeof v === type);
}

console.log(filterBy("boolean", 1, 2, "Raihan", false, 10, true, "Dewi"));