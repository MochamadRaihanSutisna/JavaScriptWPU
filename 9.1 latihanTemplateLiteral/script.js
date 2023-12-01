//HighLight


const nama = "Mochamad Raihan Sutisna";
const umur = 21;
const email = "mochamadraihansutisna@gmail.com"

function highlight(strings, ...values) {
    return strings.reduce((result, str, i) => `${result}${str}<span class="h1">${values[i] || ''}</span>`, '');
}

const str = highlight`Halo, nama saya ${nama}, saya ${umur } tahun. dan email saya adalah : ${email}`;
console.log(str);

document.body.innerHTML = str;