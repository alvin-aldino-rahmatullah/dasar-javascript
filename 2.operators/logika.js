// operator logika digunakan untuk menggabungkan beberapa ekspresi boolean menjadi satu ekspresi boolean yang lebih kompleks


// contoh kasus logika : memeriksa apakah seseorang berhak mendapatkan SIM (Surat Izin Mengemudi)
const umur = 20;
const memilikiKTP = true; // harus memiliki KTP (Kartu Tanda Penduduk)

// berikut adalah beberapa operator logika yang umum digunakan:
const dan = (umur >= 17) && memilikiKTP; // (&&) berfungsi untuk memeriksa apakah kedua kondisi bernilai true
const atau = (umur >= 17) || memilikiKTP; // (||) berfungsi untuk memeriksa apakah salah satu kondisi bernilai true
const tidak = !(umur >= 17); // (!) berfungsi untuk membalikkan nilai boolean, dari true menjadi false atau sebaliknya

console.log("apakah umur >= 17 dan memiliki KTP? : " + dan);
console.log("apakah umur >= 17 atau memiliki KTP? : " + atau);
console.log("apakah tidak memiliki KTP? : " + tidak);

// nah logika diatas dapat digunakan untuk menentukan apakah seseorang berhak mendapatkan SIM atau tidak berdasarkan umur dan kepemilikan KTP
// kalo umur sudah 17 tahun dan memiliki KTP, maka orang tersebut berhak mendapatkan SIM
// && adalah syarat kedua kondisi harus true maka diperbolehkan mendapatkan SIM
// || adalah syarat salah satu kondisi harus true maka diperbolehkan mendapatkan SIM
// ! adalah membalikkan kondisi, misalnya jika seseorang tidak memiliki KTP maka tidak berhak mendapatkan SIM atau umur belum 17 tahun maka tidak berhak mendapatkan SIM