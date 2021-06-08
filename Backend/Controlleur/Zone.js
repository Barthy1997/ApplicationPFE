const express = require('express');
const Compte = express.Router();
const config = require('../Configuration/Config');
const sql = require('mssql');
const brypt = require('bcryptjs');

Compte.route('/all').get(async(req, res, next) => {
    const reponse =await sql.connect(config);
        const user =await sql.query('Select * From Client');
        const users = [];
        for (var i = 0; i <user.rowsAffected; i++) {
            users[i] = user.recordset[i];
            console.log(users[i])
        }
        res.json({
            users
        })

});
Compte.route('/deleteOne/:id').delete(async(req,res)=>{
    const reponse =await sql.connect(config);
    const deleteUser =await sql.query('delete From client Where id='+req.params.id+'');
    const tar=true;
    console.log("bonjour"+true)
    res.json(tar)

})
module.exports = Compte;