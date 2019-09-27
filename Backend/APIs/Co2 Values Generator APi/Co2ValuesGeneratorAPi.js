const express = require('express');
const router = express.Router();
const routeDir = '/getCo2NewValue';

//get or generate generate Random Co2 Values Api
router.get(routeDir, function (request, response) {
    generateRandomCo2Values().then(function (success) {
        response.status(200).send({
            statusMessage: "Success",
            message: "Get new CO2 value successfully done!",
            status: "200",
            data: success
        })
    }).catch(function (reason) {
        response.status(404).send({
            statusMessage: "Fails",
            status: '404',
            message: "There is no data found!",
            reason: reason
        })
    });
});

function generateRandomCo2Values() {
    try {
        var generatedDate = {};
        return new Promise(function (resolve, reject) {
            var co2Values = 350 + (4650 * Math.random());
            if (co2Values !== null) {
                generatedDate = {co2Value: parseFloat(co2Values).toFixed(2)};
                resolve(generatedDate)
            } else {
                reject(generatedDate)
            }
        });
    } catch (Error) {
        console.log("error", Error)
    }

}

module.exports = router;

