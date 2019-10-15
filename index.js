var express = require('express');
var bodyParser = require('body-parser');
const Co2ValuesGeneratorAPi = require("./Backend/APIs/Co2 Values Generator APi/Co2ValuesGeneratorAPi");
var app = express();

app.use(bodyParser.json());
app.use('/api/v1', Co2ValuesGeneratorAPi);


app.get("/", function (req ,res) {
    res.send(
        '<br/><h1>Welcome to Co2 Gas Generator Backend</h1> \n <br /> ' +
        'Co2 simulation where we can generate random CO2 values (between 350 and 5000 ppm) and provided it to the frontend application <br /><br />'+
        '<h4># Use the following Apis to interact with CareBudBackend:</h4>  <br />' +
        '  1- /api/v1/getCo2NewValue  <br />' + '  to generate random CO2 values which will be (between 350 and 5000 ppm)<br />' +
        '----------------------------------------------- \n  <br />'

    )
});

app.listen(process.env.port || 4200, function () {
    console.log("Start Listening To Port 4200");
});