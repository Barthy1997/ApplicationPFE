const express = require('express');
const Client = express.Router();
const config = require('../Configuration/Config');
const sql = require('mssql');
const brypt = require('bcryptjs');

Client.route('/AllClient').get(async(req, res, next) => {
    try{   
    const reponse =await sql.connect(config);
        const user =await sql.query('Select * From [V_Clients]');
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


Client.route('/Update/:id').delete(async(req,res)=>{
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
module.exports = Client;