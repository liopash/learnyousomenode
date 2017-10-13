var http = require('http')
var host = process.argv[2]

let callback = function(response) {
    let output = '';

    response.on('data', (chunk) => output += chunk)
    
    response.on('error', (error) => console.log(error))
    response.on('end', () => console.log(`${output.length}\n${output.toString()}`))

}

http.get(host, callback)