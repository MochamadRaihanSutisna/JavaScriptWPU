//Execution Context, Hoisting, & Scope


console.log(nama);
var nama = "Raihan";

//Creation Phase Pada Global Context
// nama var = undefined
// nama function = fn()
// hoisting
// window = global object
// this = window


// execution phase

console.log(sayHello());

var nama = "Raihan";
var umur = 21;

function sayHello() {
    return `Hello, nama saya ${nama}, saat ini saya berumur ${umur} tahun.`;
}

//function membuat local Execution Context
//yang di dalamnya terdapat creation dan execution phase
//window
//arguments
//hoisting


/*
var nama = "Raihan";
var username = "@raihansu";

function cetakURl(username) {
    var instagramURL = "https://instagram.com/";
    return instagramURL + username;
};

console.log(cetakURl(username));
*/


function a() {
    console.log("ini a");
    
    function b() {
        console.log("ini b");
        
        function c() {
            console.log("ini c");
        }
        
        c();
    }
    
    b();
}

a();


//-------
function satu() {
    var nama = "raihan";
    console.log((nama));
};

function dua() {
    console.log((nama));
}

console.log(nama);
var nama= "erik";
satu();
dua("doddy");
console.log(nama);