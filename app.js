const express = require('express');
const app = express();

// create a route handles for the home path
app.get('/', function(req, res){
    res.send('Hello Kodego in Express');
});

app.listen(3000);
console.log('Server Listening at 127.0.0.1:3000');