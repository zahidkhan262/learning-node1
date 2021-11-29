var http = require('http');


let page = `
<input type="text" placeholder="type" /><br><br>
<input type="text"  placeholder="type here..."/><br><br>
<button>Submit</button>
`

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(page)
    res.end();
}).listen(4000);