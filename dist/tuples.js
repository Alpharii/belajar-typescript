var user = [1, "Mosh"];
// let user: [number, string] = [1, "Mosh", 0] // error
// let user: [number, string] = ["1", "Mosh"] // error
user.push(1); // ts bug
//dapat menggunakan eslint untuk mencegah
user[0].toExponential();
user[1].length;
//have intellisense
