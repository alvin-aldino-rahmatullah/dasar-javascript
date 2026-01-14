// logical expression digunakan untuk menggabungkan
// satu atau lebih boolean expression

// operator logika yang dipakai:
// &&  (AND) maka true jika SEMUA true
// ||  (OR)  maka true jika SALAH SATU true
// !   (NOT) maka membalik nilai boolean

const isLoggedIn = true;
const isVerified = false;

// JavaScript membaca:
// isLoggedIn = true
// isVerified = false
// aturan && : semua harus true
// hasilnya jadi false
const canAccess = isLoggedIn && isVerified;

// aturan || : salah satu true jadi true
const canLogin = isLoggedIn || isVerified;

// operator ! membalik nilai
// false menjadi true
const isNotVerified = !isVerified;

console.log("hasil isLoggedIn && isVerified:", canAccess);
console.log("hasil isLoggedIn || isVerified:", canLogin);
console.log("hasil !isVerified:", isNotVerified);