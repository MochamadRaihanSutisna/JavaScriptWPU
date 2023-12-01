//Tagged Templates

const nama = "Mochamad Raihan Sutisna";
const umur = 21;

function coba(strings, ...values) {

    //  let result = "";
    //  strings.forEach((str, i) => {
    //      result += `${str}${values[i] || ""}`; 
    //  });
    //  return result;
    

    return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''}`, '');
}

const str = coba`Halo, nama saya ${nama}, saya ${umur } tahun.`;
console.log(str);

/*

Escaping HTMl Tags
Translation & Internationalization
Styled Components

*/