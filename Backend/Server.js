const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./Configuration/Config');
const sql = require('mssql');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

sql.connect(config).then(() => {
    
}).then(result => {
    console.log("Connection")
    
})

const AuthRoute = require('./Controlleur/authentifiaction');
app.use('/authentification', AuthRoute);

const Article = require('./Controlleur/GestionArticle');
app.use('/Article',Article);

const Client = require('./Controlleur/Client');
app.use('/Client', Client);


const Compte = require('./Controlleur/GestionCompte');
app.use('/Compte', Compte);


const Profil = require('./Controlleur/Profil');
app.use('/Profil', Profil);


const Statistique = require('./Controlleur/Statistique');
app.use('/Statistique', Statistique);


const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
    console.log('Connected to port ' + port)
})
module.exports = sql;