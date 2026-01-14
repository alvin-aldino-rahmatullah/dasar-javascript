// Ternary expression adalah bentuk singkat dari if else tetapi MASIH termasuk ekspresi karena menghasilkan nilai

// Seperti :
// kondisi ? nilai_jika_true : nilai_jika_false

// Cara kerjanya 
// 1. Program mengecek kondisi
// 2. jika true → ambil nilai pertama
// 3. jika false → ambil nilai kedua

const nilai = 75;

// cek apakah nilai >= 70
// jika true → "LULUS"
// jika false → "TIDAK LULUS"
const statusKelulusan = nilai >= 70 ? "LULUS" : "TIDAK LULUS";

console.log("status kelulusan:", statusKelulusan);