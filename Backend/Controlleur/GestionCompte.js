const express = require('express');
const Compte = express.Router();
const config = require('../Configuration/Config');
const sql = require('mssql');
const brypt = require('bcryptjs');

Compte.route('/all').get(async(req, res, next) => {
    try{   
    const reponse =await sql.connect(config);
        const user =await sql.query('Select * From VM_Collaborateur');
        const users = [];
        for (var i = 0; i <user.rowsAffected; i++) {
            users[i] = user.recordset[i];
            console.log(users[i])
        }
        res.json({
            users
        })}
        catch(error)
        {
            console.log('Erreur')

        }

});
Compte.route('/allCommercial').get(async(req, res, next) => {
    try{
        const reponse =await sql.connect(config);
        const user =await sql.query('Select * From VM_Collaborateur');
        const users = [];
        for (var i = 0; i <user.rowsAffected; i++) {
            users[i] = user.recordset[i];
            console.log(users[i])
        }
        res.json({
            users
        })
    }catch(error)
    {
        console.log('Erreur')
    }
    

});

Compte.route('/deleteOne/:id').delete(async(req,res)=>{
    try{
    const reponse =await sql.connect(config);
    const deleteUser =await sql.query('delete From UserClient Where id='+req.params.id+'');
    res.json(tar)

    }catch(error)
    {
        console.log('Erreur')  
    }
    

})
Compte.route('/deleteOneCommercial/:id').delete(async(req,res)=>{
    try{
    const reponse =await sql.connect(config);
    const deleteUser =await sql.query('delete From UserCommercial Where id='+req.params.id+'');
    res.json(tar)
    }
    catch(error)
    {
        console.log('Erreur')

    }
    

})
module.exports = Compte;