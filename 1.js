// do not change this code
//var fs = require("fs");
//var input = fs.readFileSync(process.stdin.fd, "utf-8").trim().split(",");
// Jika input di STDIN 5,3 maka 5 akan masuk ke variabel angka1 dan 3 akan masuk ke variabel angka2, jadi untuk variabel angka1 dan angka2 tidak boleh dirubah isinya
var angka1 = 5; //Number(input[0]);
var angka2 = 5; //Number(input[1]);

// input your code here

if ( angka2 > angka1) {
    console.log(true);
}
else if ( angka2 < angka1)
    console.log(false);

if ( angka1 === angka2){
    console.log(-1);
}
    