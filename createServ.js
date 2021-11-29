var http = require('http');
let allData = '{"name":"zahid","age":"22"}'
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'application\json' })
    res.write(allData);
    res.end()
}).listen(4000);