const http = require('http');
const data = require('./empData');
http.createServer((request,response) => {
    response.writeHead(200, {'Content-Type':'application/json'})
    response.write(JSON.stringify(data))
    response.end();

}).listen(3000); 