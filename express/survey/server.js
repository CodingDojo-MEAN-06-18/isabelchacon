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
    response.render('index');
});

app.post('/result', function(request, response){
    var data =  request.body;
    response.render('result', data);
});

app.listen(8000, function() {
  console.log("listening on port 8000");
})
