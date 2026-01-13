// seperti namanya, operator perbandingan digunakan untuk membandingkan dua nilai. 
// nah boolean dapat digunakan untuk operator perbandingan ini karena hasil dari perbandingan tersebut adalah true atau false

const a = 10;
const b = 5;

// berikut adalah beberapa operator perbandingan yang umum digunakan:
const isEqual = a == b; // (==) berfungsi untuk memeriksa apakah nilai a sama dengan nilai b
const isNotEqual = a != b; // (!=) berfungsi untuk memeriksa apakah nilai a tidak sama dengan nilai b
const isGreaterThan = a > b; // (>) berfungsi untuk memeriksa apakah nilai a lebih besar dari nilai b
const isLessThan = a < b; // (<) berfungsi untuk memeriksa apakah nilai a lebih kecil dari nilai b
const isGreaterThanOrEqual = a >= b; // (>=) berfungsi untuk memeriksa apakah nilai a lebih besar atau sama dengan nilai b
const isLessThanOrEqual = a <= b; // (<=) berfungsi untuk memeriksa apakah nilai a lebih kecil atau sama dengan nilai b
// setiap == != > < >= <= adalah operator perbandingan yang digunakan untuk membandingkan dua nilai

console.log("apakah a sama dengan b? : " + isEqual);
console.log("apakah a tidak sama dengan b? : " + isNotEqual); 
console.log("apakah a lebih besar dari b? : " + isGreaterThan);
console.log("apakah a lebih kecil dari b? : " + isLessThan);
console.log("apakah a lebih besar atau sama dengan b? : " + isGreaterThanOrEqual);
console.log("apakah a lebih kecil atau sama dengan b? : " + isLessThanOrEqual);