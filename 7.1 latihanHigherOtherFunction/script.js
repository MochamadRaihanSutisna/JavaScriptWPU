function kerjakanTugas(matakuliah, selesai) {
    console.log(`Mulai mengerjakan Tugas ${matakuliah}... `);
    selesai();
}

function selesai() {
    alert(`selesai mengerjakan tugas ! `);
}

kerjakanTugas(`Pemrograman Web`, selesai)