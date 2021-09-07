const express = require('express');
const config = require('../Configuration/Config');
const sql = require('mssql');
const Client = express.Router();



Client.route('/AllClient').get(async(req, res) => {
    try{   
        const reponse =await sql.connect(config);
        const clt =await sql.query('Select * From V_Clients ');
        const client = [];
        for (var i = 0; i <clt.rowsAffected; i++) {
              client[i] = clt.recordset[i];
            //console.log(client[i].CO_Prenom)
        }
        res.json({
            client
        })}
        catch(error)
        {
            console.log('Erreur')

        }

});
Client.route('/OneClient/:id').get(async(req,res)=>{
    try{
    const reponse =await sql.connect(config);
    console.log(req.params.id)
    const getUser =await sql.query("Select * From V_Clients WHERE CT_Num='"+req.params.id+ "'");
    const client=[]
    for (var i = 0; i <getUser.rowsAffected; i++) {
        client[i] = getUser.recordset[i];
        console.log(client[i].CT_Num)
  }
    
    res.json(client)
    }
    catch(error)
    {
        console.log('Erreur')

    }
    

})

Client.route('/UpdateClient/:id').put(async(req,res)=>{
    try{
    const reponse =await sql.connect(config);
    console.log(req.body.ClientName,"Barthy")
    const updateClient =await sql.query("UPDATE F_COMPTET SET F_COMPTET.CT_Intitule='"+req.body.ClientName+"',CT_Ville='"+req.body.Ville+"' WHERE CT_Num='"+req.params.id+"'");
    res.json(updateClient)
    }
    catch(error)

    {
        console.log('Erreurs')

    }
    
    

})
module.exports=Client;