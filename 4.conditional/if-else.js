// if else adalah percabangan lanjutan dari if digunakan ketika terdapat DUA kemungkinan kondisi
// catatan penting:
// - if else TIDAK menghasilkan nilai
// - if else hanya mengatur ALUR program
// - SALAH SATU blok PASTI dijalankan
// =======================================================



// =======================================================
// 1. STRUKTUR DASAR IF ELSE
// =======================================================
//
// bentuk umum:
//
// if (kondisi) {
//   kode_jika_true
// } else {
//   kode_jika_false
// }
//
// jika kondisi bernilai true  → blok if dijalankan
// jika kondisi bernilai false → blok else dijalankan
// =======================================================



// =======================================================
// 2. CONTOH DASAR IF ELSE
// =======================================================

const umur = 16;

// ALUR YANG TERJADI:
//
// 1. JavaScript membaca keyword if
// 2. mengevaluasi ekspresi umur >= 18
// 3. JavaScript mengambil nilai umur (16)
// 4. melakukan perbandingan dengan operator >=
// 5. hasilnya adalah false
// 6. karena false:
//    - blok if DILEWATI
//    - blok else DIJALANKAN

if (umur >= 18) {
  console.log("Status: Dewasa");
} else {
  console.log("Status: Anak-anak");
}



// =======================================================
// 3. IF ELSE DENGAN BOOLEAN
// =======================================================

const isActive = false;

// ALUR YANG TERJADI:
//
// 1. JavaScript membaca kondisi isActive
// 2. nilai isActive adalah false
// 3. karena false:
//    - blok if dilewati
//    - blok else dijalankan

if (isActive) {
  console.log("Akun aktif");
} else {
  console.log("Akun tidak aktif");
}



// =======================================================
// 4. IF ELSE DENGAN EKSPRESI LOGIKA
// =======================================================

const isLoggedIn = true;
const isVerified = false;

// kondisi:
// isLoggedIn && isVerified
//
// ALUR YANG TERJADI:
//
// 1. JavaScript membaca isLoggedIn → true
// 2. JavaScript membaca isVerified → false
// 3. operator && mengecek:
//    apakah SEMUA true?
// 4. hasil ekspresi adalah false
// 5. karena false:
//    - blok if dilewati
//    - blok else dijalankan

if (isLoggedIn && isVerified) {
  console.log("Akses diberikan");
} else {
  console.log("Akses ditolak");
}



// =======================================================
// 5. IF ELSE SELALU MEMILIH SALAH SATU
// =======================================================

const nilai = 85;

// ALUR YANG TERJADI:
//
// 1. JavaScript mengevaluasi ekspresi nilai >= 70
// 2. nilai adalah 85
// 3. 85 >= 70 menghasilkan true
// 4. karena true:
//    - blok if dijalankan
//    - blok else DILEWATI

if (nilai >= 70) {
  console.log("LULUS");
} else {
  console.log("TIDAK LULUS");
}



// =======================================================
// 6. PERBEDAAN IF vs IF ELSE
// =======================================================
//
// if:
// - hanya berjalan jika kondisi true
// - jika false → tidak terjadi apa-apa
//
// if else:
// - selalu menjalankan SATU blok
// - cocok untuk keputusan dua arah
// =======================================================
