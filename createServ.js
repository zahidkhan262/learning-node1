var http = require('http');
let allData = [
    { name: "zahid", age: 22, email: "zahiidkhan262@gmail.com" },
    { name: "khan", age: 22, email: "zahidkhan262@gmail.com" }
]
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.write(JSON.stringify(allData));
    res.end()
}).listen(4000);