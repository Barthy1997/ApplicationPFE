const express = require('express');
const config = require('../Configuration/Config');
const sql = require('mssql');
const brypt = require('bcryptjs');
const Article=express.Router();
const dates = new Date(2021,04,22,0,0);



Article.route('/AllCatalogue').get(async(req,res)=>{
    try {
        const reponse =await sql.connect(config);
        const catalogue =await sql.query('Select * From F_CATALOGUE');
        const catalogues = [];
        for (var i = 0; i <catalogue.rowsAffected; i++) {
            catalogues[i] = catalogue.recordset[i]; 
           // console.log( catalogues[i]) 
        }
        res.json({
            catalogues
        })   
    } catch (error) {
        }
})

Article.route('/AllCommande').get(async(req,res)=>{
    try {
        const reponse =await sql.connect(config);
        const catalogue =await sql.query('Select * From [V_CommandeGroupe]');
        const catalogues = [];
        const date=[]
        for (var i = 0; i <catalogue.rowsAffected; i++) {
            catalogues[i] = catalogue.recordset[i]; 
            date[i]=catalogue.recordset[i].DO_Date;
            //console.log(date[i])  
        }
        res.json({
            catalogues,date

        })   
    } catch (error) {
        }
})

Article.route('/Commande/:id').get(async(req,res)=>{
    try {
        const reponse =await sql.connect(config);
        console.log(req.body)
        const commande =await sql.query("Select * From [V_Commande] where DO_Piece='"+req.params.id+"'");
        const cmd = [];
        for (var i = 0; i <commande.rowsAffected; i++) {
            cmd[i] = commande.recordset[i]; 
            console.log("bonjour",cmd[i]) 
        }
        res.json({
            cmd

        })   
    } catch (error) {
        }

})


Article.route('/AllPhoto').get(async(req,res)=>{
    try {
        const reponse =await sql.connect(config);
        const catalogue =await sql.query('Select * From [V_ARTICLES]');
        const catalogues = [];
        for (var i = 0; i <catalogue.rowsAffected; i++) {
            catalogues[i] = catalogue.recordset[i]; 
            console.log( catalogues[i].nomPhoto) 
        }
        res.json({
            catalogues
        })   
    } catch (error) {
        }
})




module.exports=Article;