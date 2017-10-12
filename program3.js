const fs = require('fs')

let veta = fs.readFileSync(process.argv[2]).toString().split('\n');

console.log(veta.length-1)