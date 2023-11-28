
const nama = "Mochamad Raihan Sutisna";
const umur = 21;

function highlight(strings, ...values) {

    // let result = "";
    // strings.forEach((str, i) => {
    //     result += `${str}${values[i] || ""}`; 
    // });
    // return result;
    

    return strings.reduce((result, str, i) => `${result}${str}<span class="h1">${values[i] || ''}</span>`, '');
}

const str = highlight`Halo, nama saya ${nama}, saya ${umur } tahun.`;
console.log(str);

document.body.innerHTML = str;