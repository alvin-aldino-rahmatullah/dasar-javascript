
// if adalah bentuk conditional PALING DASAR digunakan untuk MENJALANKAN kode JIKA suatu kondisi bernilai true
// catatan penting:
// - if TIDAK menghasilkan nilai
// - if hanya MENGATUR alur eksekusi program


// =======================================================
// 1. STRUKTUR DASAR IF
// =======================================================
//
// bentuk umum if:
//
// if (kondisi) {
//   kode_yang_dijalankan_jika_true
// }
//
// kondisi HARUS berupa ekspresi boolean
// (menghasilkan true atau false)
// =======================================================



// =======================================================
// 2. CONTOH SEDERHANA IF
// =======================================================

const umur = 20;

// JavaScript melakukan ALUR berikut:
//
// 1. membaca keyword `if`
// 2. mengevaluasi ekspresi di dalam tanda kurung ()
//    → umur >= 18
// 3. JavaScript mengambil nilai umur (20)
// 4. membandingkan dengan 18 menggunakan operator >=
// 5. hasil perbandingan adalah true
// 6. karena hasilnya true,
//    maka blok kode di dalam { } DIJALANKAN

if (umur >= 18) {
  console.log("Status: Dewasa");
}

// jika kondisi bernilai false,
// maka seluruh blok if akan DILEWATI
// tanpa error



// =======================================================
// 3. IF DENGAN BOOLEAN LANGSUNG
// =======================================================

const isActive = true;

// ALUR YANG TERJADI:
//
// 1. JavaScript membaca kondisi isActive
// 2. nilai isActive adalah true
// 3. karena true,
//    JavaScript menjalankan blok kode

if (isActive) {
  console.log("Akun sedang aktif");
}



// =======================================================
// 4. IF DENGAN EKSPRESI LOGIKA
// =======================================================

const isLoggedIn = true;
const isVerified = true;

// kondisi di bawah adalah EKSPRESI LOGIKA
// isLoggedIn && isVerified
//
// ALUR YANG TERJADI:
//
// 1. JavaScript membaca isLoggedIn → true
// 2. JavaScript membaca isVerified → true
// 3. operator && mengecek:
//    apakah SEMUA bernilai true?
// 4. hasil ekspresi adalah true
// 5. karena true, blok kode dijalankan

if (isLoggedIn && isVerified) {
  console.log("User dapat mengakses sistem");
}



// =======================================================
// 5. IF TIDAK SELALU DIJALANKAN
// =======================================================

const nilai = 60;

// ALUR YANG TERJADI:
//
// 1. JavaScript mengevaluasi ekspresi nilai >= 70
// 2. nilai adalah 60
// 3. 60 >= 70 menghasilkan false
// 4. karena false,
//    JavaScript MELEWATI blok kode

if (nilai >= 70) {
  console.log("Lulus");
}

// tidak ada output,
// karena kondisi bernilai false
