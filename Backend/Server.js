const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./Configuration/Config');
const sql = require('mssql');
//require('dotenv').config();
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

sql.connect(config).then(() => {
    var taff = sql.query('Select * From UserDepot');
    return taff
}).then(result => {
    console.log("Connection")
    
})

const AuthRoute = require('./Controlleur/authentifiaction');
app.use('/authentification', AuthRoute);

const Article = require('./Controlleur/GestionArticle');
app.use('/Article',Article);

const Compte = require('./Controlleur/GestionCompte');
app.use('/Compte', Compte);

const Camionnette = require('./Controlleur/Camionnette');
app.use('/Camionnette', Camionnette);

const Zone = require('./Controlleur/Zone');
app.use('/Zone', Zone);


const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
    console.log('Connected to port ' + port)
})
module.exports = sql;