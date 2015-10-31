var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
//namesList folder route from server/app.js to nameList.js
var nameList = require('./modules/nameList');


app.set('port', (process.env.PORT || 7000));


// body parser lets you read objects from req.body? and helps read objects
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({expanded: true}));


//kittyFooFoo matches url in getCall()
app.get("/kittyFooFoo", function(request, response){
    response.send(nameList);
});

app.get("/*", function(request,response){
    var file = request.params[0] || "index.html";

    response.sendFile(path.join(__dirname, "./public/", file));
    //"/public/index.html"
});


//.body refers to the object coming from /toServer
// res.send once per ajax call
app.post('/toServer', function(req, res){

    console.log(req.body);
    res.send({success:"success " + req.body.favorite});

});

//this console.log shows up with: npm start and browser refresh in terminal
console.log("this is a console.log from server/app.js");


app.listen(app.get("port"));