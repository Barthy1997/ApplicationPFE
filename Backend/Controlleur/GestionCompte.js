const express = require('express');
const Compte = express.Router();
const config = require('../Configuration/Config');
const sql = require('mssql');
const brypt = require('bcryptjs');

Compte.route('/AllCompte').get(async(req, res) => {
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

    

Compte.route('/deleteOne/:id').delete(async(req,res)=>{
    try{
    const reponse =await sql.connect(config);
    const deleteUser =await sql.query('delete From VM_Collaborateur Where id='+req.params.id+'');
    res.json(tar)

    }catch(error)
    {
        console.log('Erreur')  
    }
    
})

Compte.route('/OneCompte/:id').get(async(req,res)=>{
    try{
    const reponse =await sql.connect(config);
    const User =await sql.query('select * From VM_Collaborateur Where id='+req.params.id+'');
          profil=[];
          profil=User.recordset[0]
          console.log(profil)
    res.json({
        profil
    })

    }catch(error)
    {
        console.log('Erreur')  
    }
    
})

Compte.route('/UpdateCompte/:id').put(async(req,res)=>{
    try{
    const reponse =await sql.connect(config);
    console.log('bonhhhha')
    const UpdateCompte =await sql.query("UPDATE VM_Collaborateur SET VM_Collaborateur.Nom='"+req.body.Nom+"', Prenom='"+req.body.Prenom+"',CT_Num='"+req.body.CT_Num+"',Profil='"+req.body.Profil+"' WHERE id='"+req.params.id+"'");
    
    res.json(UpdateCompte)
    }
    catch(error)
    {        console.log('Erreur')

    }
    

})
Compte.route('/UpdateProfil/:id').put(async(req,res)=>{
    try{
    const reponse =await sql.connect(config);
    console.log("Bonjour")
    console.log(req.body,req.body.id)
    const updateProfil =await sql.query("UPDATE VM_Collaborateur SET VM_Collaborateur.Nom='"+req.body.Nom+"', Login='"+req.body.Login+"',Prenom='"+req.body.Prenom+"' WHERE id='"+req.params.id+"'");
    
    res.json(updateProfil)
    }
    catch(error)
    {
        console.log('Erreur')

    }
    

})
module.exports = Compte;