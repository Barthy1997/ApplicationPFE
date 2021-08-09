const express = require('express');
const AuthRoute = express.Router();
const config = require('../Configuration/Config');
const sql = require('mssql');
const brypt = require('bcryptjs')
var jwt = require("jsonwebtoken");
let jwt_secret = "hdhzfghzhgszghsbgshh526262662jéjà@26JDHSG";
let code;
let token;

AuthRoute.route('/ProfilUser').post(async (req, res) => {
    try {
        const reponse = await sql.connect(config);
        let salt = brypt.genSaltSync(10)
        let hash = brypt.hashSync(req.body.password, salt)
        const commercial = await sql.query("INSERT INTO UserCommercial VALUES('" + req.body.nom + "','" + req.body.codecommercial+ "','" + req.body.profil + "','" + req.body.Camionnette + "','" + hash + "')");
        res.json(commercial)
    } catch (error) {
        console.log('erreur')
        
    }
});


AuthRoute.route('/AjoutUser').post(async(req, res) => {
    try {
        const reponse = await sql.connect(config);
        console.log(req.body)
        const client = await sql.query("INSERT INTO VM_Collaborateur VALUES('"  + req.body.Login + "','"  + req.body.Password + "','" + req.body.CO_NO+ "','" + req.body.Profil + "','" + req.body.Nom+ "','" + req.body.Prenom + "','" + req.body.CT_Num + "','" + req.body.RegistrationID+ "','" + req.body.N_cattarif + "')");
        res.json(client)
    } catch {
        console.log('Erreur')
    }
});


AuthRoute.route('/login').post(async(req, res) => {

    try {
        const reponse = await sql.connect(config);
        const request = await sql.query("SELECT * From VM_Collaborateur where Login='" +req.body.Username+"' and Psw='"+req.body.password+ "'");
        if(request.rowsAffected!=0)
            {
            const user = request.recordset[0];
            console.log(user)
            token = await jwt.sign({
                user
            }, jwt_secret, {
                expiresIn: 1
            });
               res.json({
                  token
                  
            })
            }
        else{
            console.log("Erreur")
            res.json()

        }
        
       

    } catch (error) {
        console.log('Erreur')

    }
})


AuthRoute.route('/authorisation').post(async (req, res) => {
    const header = res.header('x-token', token)
    console.log('bonjour',req.headers['authorization']);
    console.log(res.header('x-token'))
    jwt.verify(header, token, (err, token) => {
        if (err) {
            res.sendStatus(403)
            console.log('erreur authentification')
        }
        else {
            res.json(token)
            console.log('succès')
        }
    })


})
module.exports = AuthRoute;


