var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static(__dirname + "/static"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }));

app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
    if(!request.session.number){
        request.session.number = Math.floor(Math.random() * 100) + 1;
        request.session.result = "";
    }
    data = {result: request.session.result, number: request.session.number};
    response.render('index', data);
});

app.post('/process', function(request, response){
    var guess =  request.body.guess;
    if (guess > request.session.number){
        request.session.result = "Too High!";
    }
    else if (guess < request.session.number){
        request.session.result = "Too Low!";
    }
    else {
        request.session.result = "win";
    }
    response.redirect('/');
});

app.get('/reset', function(request, response){
    request.session.destroy();
    response.redirect('/');
});

app.listen(8000, function() {
  console.log("listening on port 8000");
})
