const express = require('express');
const Profil = express.Router();
const config = require('../Configuration/Config');
const sql = require('mssql');
const brypt = require('bcryptjs');

Profil.route('/AllProfil').get(async(req, res) => {
    const reponse =await sql.connect(config);
        const Profil =await sql.query('Select * From T_Profil');
        const profils = [];
        for (var i = 0; i <Profil.rowsAffected; i++) {
            profils[i] = Profil.recordset[i];
            console.log(profils[i])
        }
        res.json({
            profils
        })

});
Profil.route('/AjoutProfil').post(async(req,res)=>{
    let ft;
    const reponse =await sql.connect(config);
    const addProfil =await sql.query("INSERT INTO T_Profil VALUES('"+req.body.code_Profil+"','" + req.body.Intitule+ "')");
    const Profil =await sql.query('Select * From T_Profil');
        const profils = [];
        for (var i = 0; i <Profil.rowsAffected; i++) {
            profils[i] = Profil.recordset[i];
            console.log(profils[i])
        }
        res.json({
            profils
        })
    

})
    Profil.route('/deleteOne/:id').delete(async(req,res)=>{
    const reponse =await sql.connect(config);
    console.log(req.params.id)
    const deleteUser =await sql.query('delete From T_Profil Where id='+req.params.id+'');
    const tar=true;
    console.log(true)
    res.json(tar)

})
module.exports = Profil;