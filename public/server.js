var http = require('http');
var sys = require('sys');
var server = http.createServer(
function(request,response){
    console.log(request);
    request.resume();
    request.on('end',function() {
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.write(sys.inspect(request));
        response.end();
        });
    })
server.listen(9000);
