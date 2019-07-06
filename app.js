const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config/database');


//Initialize our app variable
const app = express();

// controllers
const pacientes = require('./controllers/pacientes');
app.use('/pacientes', pacientes);

//Port
const port = 3000;

// Connect mongoose to our database
mongoose.connect(config.database);

//midleware que permite cors
app.use(cors());

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// de aca levantamos el front ya buildeado
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send('invalid page');
})

app.listen(port, () => {
    console.log('Server levantado en puerto ' + port );
});