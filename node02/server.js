// let http = require('http');

// let myDate = require('./index');

// http.createServer(function (req, res) {
//     res.writeHead(200, { 'Content-Type': "text/html" });
//     res.write("date and time" + myDate.myDateTime())
//     res.end();
// }).listen(3000);


// console.log("server is now running");




// let http = require('http');

// let URL = require('url');


// http.createServer(function (req, res) {
//     res.writeHead(200, { 'Content-Type': "text/html" });
//     let test = URL.parse(req.url, true).query;
//     let printYearMonth = test.year + " " + test.month;
//     // res.write(req.url);

//     res.end(printYearMonth);
// }).listen(3000);


// console.log("server is now running");



let http = require('http');

let capital = require('upper-case');


http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': "text/html" });
    res.write(capital.upperCase("hello node"))
    res.end();
}).listen(3000);


console.log("server is now running");