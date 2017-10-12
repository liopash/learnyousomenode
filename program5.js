const fs = require('fs')
const path = require('path')

fs.readdir(process.argv[2], function (err, data) {
    data.forEach(function (x) {
        if (path.extname(x) == "." + process.argv[3]) console.log(x);
    })
});



// console.log(veta)