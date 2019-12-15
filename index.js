// Handle multiple different http requests at a specific url.
var express = require('express');
//extract the entire body portion of an incoming request stream and exposes it on the request body
var bodyParser = require('body-parser');
//Importing Co2ValuesGeneratorAPi
const Co2ValuesGeneratorAPi = require("./Backend/APIs/Co2 Values Generator APi/Co2ValuesGeneratorAPi");
//setting express app
var app = express();

//initializing backend routes
app.use(bodyParser.json());
app.use('/api/v1', Co2ValuesGeneratorAPi);

// get request on root level and shows some details in the website as details about the backend
app.get("/", function (req ,res) {
    res.send(
        '<br/><h1>Welcome to Co2 Gas Generator Backend</h1> \n <br /> ' +
        'Co2 simulation where we can generate random CO2 values (between 350 and 5000 ppm) and provided it to the frontend application <br /><br />'+
        '<h4># Use the following Apis to interact with CareBudBackend:</h4>  <br />' +
        '  1- /api/v1/getCo2NewValue  <br />' + '  to generate random CO2 values which will be (between 350 and 5000 ppm)<br />' +
        '----------------------------------------------- \n  <br />'

    )
});
// listening for http requests on port number 4200
app.listen(process.env.port || 4200, function () {
    console.log("Start Listening To Port 4200");
});