var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var bodyParser = require('body-parser');
var router = express.Router();
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

// route middleware that will happen on every request
router.param('name',function(req,res,next,name){
    if(name.length>5){
        console.log("Valid Name");
    }
    else{
        console.log("invalid name");
    }
    req.name = name;
    next();
})
router.use(function(req, res, next) {

    // log each request to the console
    console.log(req.method, req.url);

    // continue doing what we were doing and go to the route
    next(); 
});
router.get('/hello/:name',function(req,res){
    res.send('Hello'+req.params.name);
});
// home page route (http://localhost:8080)
router.get('/', function(req, res) {
    res.send('im the home page!');  
});

// about page route (http://localhost:8080/about)
router.get('/about', function(req, res) {
    res.send('im the about page!'); 
});

app.route('/login')

    // show the form (GET http://localhost:8080/login)
    .get(function(req, res) {
        res.sendFile(__dirname + '/public/views/login.html');
    })
    // process the form (POST http://localhost:8080/login)
    .post(function(req, res) {
        console.log('processing');
        res.send('processing the login form!');
    });

// apply the routes to our application
app.use('/', router);


// app.post('/api/users', function(req, res) {
//     var user_id = req.body.id;
//     var token = req.body.token;
//     var geo = req.body.geo;

//     res.send(user_id + ' ' + token + ' ' + geo);
// });

app.listen(port);
console.log('Server started! At http://localhost:' + port);