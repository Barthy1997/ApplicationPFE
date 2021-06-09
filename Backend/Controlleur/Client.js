const express = require('express');
const config = require('../Configuration/Config');
const sql = require('mssql');
const Client = express.Router();



Client.route('/AllClient').get(async(req, res) => {
    try{   
        const reponse =await sql.connect(config);
        const clt =await sql.query('Select * From V_Clients where CO_No < 10');
        const client = [];
        for (var i = 0; i <clt.rowsAffected; i++) {
              client[i] = clt.recordset[i];
            console.log(client[i].CT_Num)
        }
        res.json({
            client
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
module.exports=Client;