let net = require("net");
let date = new Date();
let port = process.argv[2];

const zeroFill = x => (x < 10 ? "0" : "") + x;

let year = date.getFullYear();
let month = zeroFill(date.getMonth() + 1);
let day = zeroFill(date.getDate());
let hour = zeroFill(date.getHours());
let minute = zeroFill(date.getMinutes());

let formDate = `${year}-${month}-${day} ${hour}:${minute}`;

const server = net.createServer(function(c) {
  //'connection' listener
  c.write(formDate);
  c.end("\n");
});

server.listen(port);
