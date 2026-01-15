
// else if digunakan ketika terdapat LEBIH DARI DUA kondisi JavaScript akan mengecek kondisi dari ATAS ke BAWAH
//
// catatan penting:
// - else if TIDAK wajib
// - else if bisa lebih dari satu
// - eksekusi BERHENTI saat kondisi true pertama ditemukan
// =======================================================


// =======================================================
// 1. STRUKTUR DASAR ELSE IF
// =======================================================
//
// bentuk umum:
//
// if (kondisi1) {
//   kode_jika_kondisi1_true
// } else if (kondisi2) {
//   kode_jika_kondisi2_true
// } else {
//   kode_jika_semua_false
// }
//
// JavaScript membaca kondisi secara BERURUTAN
// =======================================================



// =======================================================
// 2. CONTOH DASAR ELSE IF
// =======================================================

const nilai = 78;

// ALUR YANG TERJADI:
//
// 1. JavaScript membaca if (nilai >= 85)
//    → 78 >= 85 = false → dilewati
//
// 2. JavaScript lanjut ke else if (nilai >= 70)
//    → 78 >= 70 = true
//
// 3. karena true:
//    - blok ini dijalankan
//    - pengecekan BERHENTI
//    - else di bawahnya TIDAK dicek

if (nilai >= 85) {
  console.log("Nilai A");
} else if (nilai >= 70) {
  console.log("Nilai B");
} else {
  console.log("Nilai C");
}



// =======================================================
// 3. ELSE IF DENGAN BANYAK KONDISI
// =======================================================

const jam = 15;

// ALUR YANG TERJADI:
//
// 1. jam < 10 → 15 < 10 = false
// 2. jam < 14 → 15 < 14 = false
// 3. jam < 18 → 15 < 18 = true
// 4. blok ini dijalankan
// 5. JavaScript BERHENTI membaca kondisi berikutnya

if (jam < 10) {
  console.log("Pagi");
} else if (jam < 14) {
  console.log("Siang");
} else if (jam < 18) {
  console.log("Sore");
} else {
  console.log("Malam");
}



// =======================================================
// 4. ELSE IF + LOGICAL OPERATOR
// =======================================================

const role = "user";
const isActive = true;

// ALUR YANG TERJADI:
//
// 1. role === "admin" && isActive
//    → false && true = false
//
// 2. role === "user" && isActive
//    → true && true = true
//
// 3. blok ini dijalankan
// 4. else setelahnya tidak diproses

if (role === "admin" && isActive) {
  console.log("Akses admin");
} else if (role === "user" && isActive) {
  console.log("Akses user");
} else {
  console.log("Akses ditolak");
}



// =======================================================
// 5. URUTAN KONDISI SANGAT PENTING
// =======================================================

const score = 95;

// PERHATIAN:
// kondisi HARUS dari yang PALING SPESIFIK
// ke yang PALING UMUM
//
// jika dibalik, hasil bisa SALAH

if (score >= 90) {
  console.log("Sangat Baik");
} else if (score >= 80) {
  console.log("Baik");
} else if (score >= 70) {
  console.log("Cukup");
} else {
  console.log("Kurang");
}



// =======================================================
// 6. PERBEDAAN IF ELSE vs ELSE IF
// =======================================================
//
// if else:
// - hanya 2 kemungkinan
//
// else if:
// - banyak kemungkinan
// - dibaca dari atas ke bawah
// - berhenti di kondisi true pertama
// =======================================================
