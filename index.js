const express = require('express')
const app =     express()
const cors =    require('cors');

// Used to serve static files 

app.use(express.static('public'));
app.use(cors());

// Create user account

app.get('/account/create/:name/:email/:password', function (req, res) {
    res.send({
        name:       req.params.name,
        email:      req.params.email,
        password:   req.params.password
    });
});