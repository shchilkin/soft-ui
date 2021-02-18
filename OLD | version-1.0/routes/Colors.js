const express = require('express');
const router = express.Router();
const fetch = require("node-fetch");

// @route           POST
// @description     color schema from colormind.io API
// @access          Public

async function getColorsFromColorMind(red, green, blue){
    const url = "http://colormind.io/api/";
    const data = {
        model: "default",
        input: [[red, green, blue], "N", "N", "N", "N"]
    };

    try {
        return await fetch(url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
    }
    catch (error) {
        console.warn('error',error);
       return (error);
    }
}

router.post('/', (request, response) => {
    // request.body.HotLoads
    getColorsFromColorMind(request.body.Red, request.body.Green, request.body.Blue)
        .then(response => { return response.json() }).then( color => response.send(color))
});


router.get('/', (request, response) => {
  response.send('Colors API endpoint')
});

module.exports = router;