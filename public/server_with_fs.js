var http = require('http');
var fs = require('fs');
var port = 9000;
http.createServer(function (req, res) {
    if (req.url === '/favicon.ico') {
        return res.end();
    }
    console.log('Incoming request to ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    setTimeout(function() {
        fs.readFile(__filename, {
            encoding: 'utf8'
        }, function (error, contents) {
            if (error) {
                console.error(error);
                return res.end();
            }
            console.log('sending response for ' + req.url);
            res.end(contents);
        });
    }, 5000);
    //do some other work
    var i = 2;
    while(i--) {
        console.log('value--> '  + i + '\r');
    }
}).listen(port, '127.0.0.1');
console.log('Server running at http://127.0.0.1:'+port+'/');