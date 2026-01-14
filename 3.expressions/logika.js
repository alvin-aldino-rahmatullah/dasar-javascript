const isLoggedIn = true;
const isVerified = false;
const canAccess = isLoggedIn && isVerified;

const canLogin = isLoggedIn || isVerified;

const isNotVerified = !isVerified;

console.log("hasil isLoggedIn && isVerified:", canAccess);
console.log("hasil isLoggedIn || isVerified:", canLogin);
console.log("hasil !isVerified:", isNotVerified);