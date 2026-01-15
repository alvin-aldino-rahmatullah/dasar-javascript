// switch digunakan sebagai ALTERNATIF dari if - else if
// ketika:
// - nilai yang dicek adalah SATU VARIABEL
// - perbandingan menggunakan === (strict equality)
//
// switch cocok untuk:
// - menu
// - pilihan angka
// - status
// - role
// =======================================================



// =======================================================
// 1. STRUKTUR DASAR SWITCH
// =======================================================
//
// bentuk umum:
//
// switch (nilai) {
//   case nilai1:
//     kode
//     break;
//   case nilai2:
//     kode
//     break;
//   default:
//     kode_default
// }
//
// catatan penting:
// - switch menggunakan ===
// - break WAJIB agar tidak lanjut ke case berikutnya
// =======================================================



// =======================================================
// 2. CONTOH SWITCH PALING DASAR
// =======================================================

const angka = 2;

// ALUR YANG TERJADI:
//
// 1. JavaScript membaca switch(angka)
// 2. angka dibandingkan dengan case 1
//    → 2 === 1 → false
// 3. lanjut ke case 2
//    → 2 === 2 → true
// 4. kode dalam case 2 dijalankan
// 5. break → keluar dari switch

switch (angka) {
  case 1:
    console.log("Angka satu");
    break;
  case 2:
    console.log("Angka dua");
    break;
  case 3:
    console.log("Angka tiga");
    break;
  default:
    console.log("Angka tidak dikenali");
}



// =======================================================
// 3. SWITCH TANPA BREAK (HATI-HATI)
// =======================================================

const level = 1;

// ALUR YANG TERJADI:
//
// 1. level === 1 → true
// 2. kode case 1 dijalankan
// 3. TIDAK ADA break
// 4. eksekusi LANJUT ke case 2 dan 3

switch (level) {
  case 1:
    console.log("Level 1");
  case 2:
    console.log("Level 2");
  case 3:
    console.log("Level 3");
    break;
  default:
    console.log("Level tidak valid");
}

// hasil:
// Level 1
// Level 2
// Level 3



// =======================================================
// 4. SWITCH DENGAN STRING
// =======================================================

const hari = "senin";

// ALUR YANG TERJADI:
//
// 1. switch(hari)
// 2. "senin" === "senin" → true
// 3. kode dijalankan
// 4. break → selesai

switch (hari) {
  case "senin":
    console.log("Hari Senin");
    break;
  case "selasa":
    console.log("Hari Selasa");
    break;
  case "rabu":
    console.log("Hari Rabu");
    break;
  default:
    console.log("Hari tidak valid");
}



// =======================================================
// 5. MULTIPLE CASE (SATU HASIL)
// =======================================================

const nilaiHuruf = "B";

// ALUR YANG TERJADI:
//
// case A dan B menghasilkan output yang sama
// karena break diletakkan di akhir

switch (nilaiHuruf) {
  case "A":
  case "B":
    console.log("Nilai baik");
    break;
  case "C":
    console.log("Nilai cukup");
    break;
  default:
    console.log("Nilai kurang");
}



// =======================================================
// 6. PERBANDINGAN SWITCH vs IF ELSE IF
// =======================================================
//
// switch:
// - cocok untuk nilai pasti
// - hanya ===
// - lebih rapi untuk menu
//
// if else if:
// - bisa pakai > < <= >=
// - lebih fleksibel
// =======================================================