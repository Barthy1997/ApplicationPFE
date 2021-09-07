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
        }
        res.json({
            profils
        })

});
Profil.route('/AjoutProfil').post(async(req,res)=>{
    try{
    var Profil=false;
    const reponse =await sql.connect(config);
     Profil =await sql.query('Select * From T_Profil  where code_Profil='+req.body.code_Profil+'');
    if(Profil.rowsAffected==0)
    {
    const addProfil =await sql.query("INSERT INTO T_Profil VALUES('"+req.body.code_Profil+"','" + req.body.Intitule+ "')");
        const profils = [];
        for (var i = 0; i <Profil.rowsAffected; i++) {
            profils[i] = Profil.recordset[i];
            //console.log(profils[i])
        }
        res.json({
            profils
        })

    }

}catch(error)
{
    console.log('Erreur')  
}
})
    Profil.route('/deleteOne/:id').delete(async(req,res)=>{
    const reponse =await sql.connect(config);
    console.log(req.params.id)
    const deleteUser =await sql.query('delete From T_Profil Where id='+req.params.id+'');
    const tar=true;
    console.log(true)
    res.json(tar)

})

Profil.route('/UpdateProfilEmploye/:id').put(async(req,res)=>{
    try{
    const reponse =await sql.connect(config);
    console.log("Bonjour")
    console.log(req.body,req.body.id)
    const updateProfil =await sql.query("UPDATE VM_Collaborateur SET T_Profil='"+req.body.Nom+"', Login='"+req.body.Login+"',Prenom='"+req.body.Prenom+"' WHERE id='"+req.params.id+"'");
    
    res.json(updateProfil)
    }
    catch(error)
    {
        console.log('Erreur')

    }
})



module.exports = Profil;