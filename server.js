
var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
var mongoose    = require('mongoose');

// [ CONFIGURE mongoose ]

// CONNECT TO MONGODB SERVER
var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
    // CONNECTED TO MONGODB SERVER
    console.log("Connected to mongod server");
});

mongoose.connect('mongodb://localhost/mongodb1');

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/page.html");
  });

// DEFINE MODEL
var Student = require('./models/students');

// [CONFIGURE APP TO USE bodyParser]
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// [CONFIGURE SERVER PORT]

var port = process.env.PORT || 1206;

// [CONFIGURE ROUTER]
var router = require('./routes')(app,Student);


// [RUN SERVER]
var server = app.listen(port, function(){
 console.log("Express server has started on port " + port)
});