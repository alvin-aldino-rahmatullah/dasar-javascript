// Pada number bisa memakai konsep arithmatic operators digunakan untuk melakukan perhitungan matematika dasar


const a = 6;
const b = 5;

const penjumlahan = a + b; // penjumlahan
const pengurangan = a - b; // pengurangan
const perkalian = a * b; // perkalian
const pembagian = a / b; // pembagian
const sisaPembagian = a % b; // modulus atau sisa pembagian

console.log("nilai a = 6 dan b = 5");
console.log("jika dijumlah: " + penjumlahan);
console.log("jika dikurang: " + pengurangan);
console.log("jika dikali: " + perkalian);
console.log("jika dibagi: " + pembagian);
console.log("jika sisa pembagian: " + sisaPembagian);

console.log("-----------------------");
// contoh kasus operasi number pada kehidupan sehari-hari
const hargaSabun = 5000;
const hargaShampoo = 15000;
const diskon = 0.1; // 10% diskon
const totalHarga = hargaSabun + hargaShampoo;
const hargaSetelahDiskon = totalHarga - (totalHarga * diskon);

console.log("harga sabun: " + hargaSabun);
console.log("harga shampoo: " + hargaShampoo);
console.log("Total harga sebelum diskon: " + totalHarga);
console.log("Total harga setelah diskon 10%: " + hargaSetelahDiskon);
