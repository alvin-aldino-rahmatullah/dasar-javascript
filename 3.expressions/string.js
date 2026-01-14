// string expression adalah ekspresi yang menghasilkan string
// biasanya menggunakan operator +

const firstName = "Bagus";
const lastName = "Pratama";

// Program akan menggabungkan dua nama (String) menjadi satu
// "Bagus" + " " + "Pratama"
const fullName = firstName + " " + lastName;
// Maka output yang dihasilkan bukan lagi nama terpisah tapi nama yang telah bersatu
const greeting = "Halo, nama saya " + fullName;

console.log(fullName);
console.log(greeting);