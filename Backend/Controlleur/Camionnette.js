const express = require('express');
const Camionnette=express.Router();
const config = require('../Configuration/Config');
const sql = require('mssql');
const brypt = require('bcryptjs');

Camionnette.route('/ajout').post(async(req, res, next) => {
    try {
    const reponse =await sql.connect(config);
    const camion =await sql.query("INSERT INTO Camionnette VALUES('" +req.body.Matricule + "','" +req.body.Type+ "','"+req.body.Concessionnaire+"')");
        res.json(camion)
    }catch(error)
    {
        console.log('erreur')
    }

});

Camionnette.route('/all').get(async(req, res, next) => {
    try{
    const reponse =await sql.connect(config);
        const camion =await sql.query('Select * From Camionnette');
        const camions = [];
        for (var i = 0; i <camion.rowsAffected; i++) {
            camions[i] = camion.recordset[i];
           // console.log(camions[i])
        }
        res.json({
            camions
        })
    }catch(error)
    {
        console.log('Erreur')
    }

});



Camionnette.route('/delete/:id').delete(async(req, res, next) => {
    try{
        const reponse =await sql.connect(config);
        console.log(req.params.id,'yyyy')
        const camion =await sql.query("delete From Camionnette where id="+req.params.id);
        res.json({
            camion
        })
    }catch(error)
    {
        console.log('Erreur')
    }

});







module.exports = Camionnette;