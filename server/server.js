require('./config/config')
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { json } = require('express');

app.use(bodyParser.urlencoded({extended: false})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
 


app.get('/', function (req, res) {
    res.json('Hello world')
})

app.get('/usuario', function (req, res) {

    res.json('post usuario')
})

app.post('/usuario', function (req, res) {
    let body = req.body;
    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            message: 'El nombre es necesario'
        })
    } else {
        res.json({
            ok:true,
            persona: body
        })
    }
    
})

app.put('/usuario/:id', function (req, res) {

    let id = req.params.id;

    res.json({
        id
    })
})

app.delete('/usuario', function (req, res) {
    res.json('delete usuario')
})

app.listen(port, () => {
    console.log('Escuchando puerto', port);
})