var express = require('express');
var session = require('express-session');
var app = express();

app.use(express.static(__dirname + "/static"));

app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }));

app.set('view engine', 'ejs');

app.get('/', function(request, response) {
    if(request.session.counter){
        request.session.counter ++;
    }
    else{
        request.session.counter = 1;
    }
    var data = {counter: request.session.counter};
    response.render('index', data);
});

app.post('/double', function(request, response) {
    request.session.counter += 1;
    response.redirect('/');
})

app.post('/reset', function(request, response) {
    request.session.counter = 0;
    response.redirect('/');
})

app.listen(8000, function() {
  console.log("listening on port 8000");
})
