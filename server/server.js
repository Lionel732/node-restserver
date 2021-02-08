require('./config/config');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
//const { json } = require('express');

app.use(bodyParser.urlencoded({extended: false})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
 
mongoose.connect(process.env.URLDB,
    {useNewUrlParser: true, useCreateIndex: true},
    (err, res) => {
    if (err) throw err;
    console.log('Base de datos ONLINE');
})

// Cargamos todas las rutas (Configuracion global de rutas)
app.use(require('./routes/index'));

// Escuchando el puerto que definimos
app.listen(port, () => {
    console.log('Escuchando puerto', port);
})