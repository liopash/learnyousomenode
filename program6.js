var volaco = require('./program6Module.js');
const path = require('path')
var dir = process.argv[2]
var suff = process.argv[3]


volaco(dir, suff, function(err, data) {
     if (err) return console.log("Error message is: ", err);
     data.forEach((x) => console.log(x))
               
})