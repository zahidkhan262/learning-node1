const express = require('express');

const app = express();

const port = 5000;

app.get('/', (req, resp) => {
    resp.send("hello node js")
})
app.listen(port, () => {
    console.log("server is loading")
})