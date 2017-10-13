var http = require('http')

var host = process.argv.slice(2)

var result = []

var counter = 0

let httpGet = function(index) {
    
    http.get(host[index], function(response) {
        let output = '';
        response.on('data', (chunk) => output += chunk)
        response.on('error', (error) => console.log(error))
        response.on('end', function() { 
                result[index] = output;
                counter++;
                if (counter == 3) console.log(result.join("\n"));
        })
    });
    
}

for (i = 0; i < 3; i++) {
    httpGet(i);
}






