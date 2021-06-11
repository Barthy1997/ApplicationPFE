const express = require('express');
const config = require('../Configuration/Config');
const sql = require('mssql');
const brypt = require('bcryptjs');
const Article=express.Router();



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
        const catalogue =await sql.query('Select * From [V_Commande] where CO_No <140');
        const catalogues = [];
        for (var i = 0; i <catalogue.rowsAffected; i++) {
            catalogues[i] = catalogue.recordset[i]; 
            console.log( catalogues[i]) 
        }
        res.json({
            catalogues
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