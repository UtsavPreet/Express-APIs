var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

// routes will go here


app.listen(port);
console.log('Server started! At http://localhost:' + port);