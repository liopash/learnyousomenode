const fs = require('fs')
const path = require('path')

module.exports = function (dir, suff, callback) {
    fs.readdir(dir, function (err, data) {
        if (err) { 
           return callback(err);
        } else {
           return callback(0, data.filter((x) => path.extname(x) === "." + suff ));
    }
    })
}



