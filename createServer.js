const http = require('http');

// http.createServer((request,response)=>{
//     response.writeHead(200,{'Content-Type':'Text/html'});
//     response.write('<h2>welcome to node js server</h2>')
//     response.end();
// }).listen(1000)

//function as a parameter

const sayhello = (request,response) => {
      response.write('hello from sayhello function')
      response.end();
}

http.createServer(sayhello).listen(1000)