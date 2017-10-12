// No third party module required: https is part of the Node.js API
const http = require('http')
let url = process.argv[2]

http.get(url, function(res) {
    res.setEncoding('utf8');
    //console.log('STATUS: ' + res.statusCode);
    //console.log('HEADERS: ' + JSON.stringify(res.headers));
    //console.log('------------------------------------')
    //console.log("Got response: " + res.statusCode);
    
      res.on("data", function(chunk) {
        console.log(chunk);
      });
})







/*
const https = require("https");

const url =
  "https://maps.googleapis.com/maps/api/geocode/json?address=Florence";
.
https.get(url, res => {
  res.setEncoding("utf8");
  let body = "";
  res.on("data", data => {
    body += data;
  });
  res.on("end", () => {
    body = JSON.parse(body);
    console.log(
      `City: ${body.results[0].formatted_address} -`,
      `Latitude: ${body.results[0].geometry.location.lat} -`,
      `Longitude: ${body.results[0].geometry.location.lng}`
    );
  });
});
*/