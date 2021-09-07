const express = require('express');
const Statistique = express.Router();
const config = require('../Configuration/Config');
const sql = require('mssql');



Statistique.route('/AllStat').get(async (req, res) => {
    const reponse = await sql.connect(config);
    const Stat = await sql.query("Select AR_Design,CA,AR_Ref From [STAT_CA(Coca)] Where Mois=12");
    CAdec = [];
    Designdec = [];
    CAjan = [];
    Designjan = [];
    evolutionCA = [];
    alls = [];
    for (var i = 0; i < 500; i++) {
        alls[i] = Stat.recordset[i];
    }
    res.json({
        alls,
        CAdec,
        Designdec,
        CAjan,
        Designjan,
        evolutionCA
    })




    Statistique.route('/StatOne/:id').get(async (req, res) => {
        try {
            const reponse = await sql.connect(config);
            const StatDec = await sql.query("Select AR_Design,CA From [STAT_CA(Coca)] where Mois=12 and AR_Ref='" + req.params.id + "'");
            const StatJAN = await sql.query("Select AR_Design,CA From [STAT_CA(Coca)] where Mois=1 and AR_Ref='" + req.params.id + "'");
            const Stat = await sql.query("Select Max(CA) AS CA From [STAT_CA(Coca)]");
            const Max = [];
            const Designdec = [];
            const Designjan = [];
            const CAdec = [];
            const CAjan = [];
            const evolutionCA = [];
            var CA = new Array();
            for (var i = 0; i < 1; i++) {
                Designdec[i] = StatDec.recordset[i].AR_Design;
                Designjan[i] = StatJAN.recordset[i].AR_Design;
                Max[i] = Stat.recordset[i].CA
                CAdec[i] = StatDec.recordset[i].CA;
                CAjan[i] = StatJAN.recordset[i].CA;
                evolutionCA[i] = CAjan[i] - CAdec[i];
                CA.push(CAdec[i], CAjan[i], evolutionCA[i])
                console.log(Max[i])
            }
            res.json({
                Designdec,
                Designjan,
                CAdec,
                CAjan,
                evolutionCA,
                CA,
                Max
            })


        } catch (error) {
            console.log("erreur")
        }
    })

});


Statistique.route('/StatClient/:id').get(async (req, res) => {
    try {
        const reponse = await sql.connect(config);
        const StatDec = await sql.query("Select CT_Intitule,CA From [STAT_ClientGroupe] where CA='" + req.params.id + "'");
        const intitule = new String(StatDec.recordset[0].CT_Intitule)
        const StatJAN = await sql.query("Select CT_Intitule,CA From [STAT_ClientGroupe] where Mois=1 and CT_Intitule='" + intitule + "'");
        const Designdec = [];
        const CAdec = [];
        const Designjan = [];
        const CAjan = [];
        const evolutionCA = [];
        var CA = new Array();
        for (var i = 0; i < 1; i++) {
            Designdec[i] = StatDec.recordset[i].CT_Intitule;
            CAdec[i] = StatDec.recordset[i].CA;
            Designjan[i] = StatJAN.recordset[i].CT_Intitule;
            CAjan[i] = StatJAN.recordset[i].CA;
            evolutionCA[i] = CAjan[i] - CAdec[i];
            CA.push(CAdec[i], CAjan[i], evolutionCA[i])
        }
        res.json({
            Designdec,
            CAdec,
            Designjan,
            CAjan,
            evolutionCA,
            CA
        })


    } catch (error) {
        console.log("erreur")
    }
})
Statistique.route('/AllClient').get(async (req, res) => {
    try {
        const reponse = await sql.connect(config);
        const StatDec = await sql.query("Select CT_Intitule,CA From [STAT_ClientGroupe] Where Mois=12");
        const Designdec = [];
        const CAdec = [];
        const evolutionCA = [];
        all = [];
        for (var i = 0; i < 200; i++) {
            Designdec[i] = StatDec.recordset[i].CT_Intitule;
            CAdec[i] = StatDec.recordset[i].CA;
            all[i] = StatDec.recordset[i];
            //console.log(CAdec[i])
        }
        res.json({
            Designdec,
            CAdec,
            all

        })


    } catch (error) {
        console.log("erreur")
    }
})

Statistique.route('/StatGeneral').get(async (req, res) => {
    try {
        const reponse = await sql.connect(config);
        //const AllClient= await sql.query("Select   From [STAT_ClientGroupe] where Mois=12");
        const ClientMax = await sql.query("Select Max(CA) AS CA From [STAT_ClientGroupe] where Mois=12");
        const ClientMaxjan = await sql.query("Select  Max(CA) AS CA From [STAT_ClientGroupe] where Mois=1");
        const CA = new String(ClientMax.recordset[0].CA)
        //const ClientDesignmin= await sql.query("Select CT_Intitule From [STAT_ClientGroupe] where CA='"+CAS+"'"); 
        //const ClientDesignminjan= await sql.query("Select CT_Intitule From [STAT_ClientGroupe] where CA='"+CASjan+"'"); 
        const all = [];
        const ClientMins = [];
        const ClientMinsjan = [];
        const DesignMax = [];
        const DesignMaxjan = [];
        const DesignMin = [];
        const DesignMinjan = [];
        for (var i = 0; i < 1; i++) {
            all[i] = ClientMax.recordset[i];
            //ClientMinsjan[i]=ClientMinjan.recordset[i];
            ClientMins[i] = ClientMin.recordset[i];
            DesignMax[i] = ClientDesignmax.recordset[i];
            DesignMaxjan[i] = ClientDesignmaxjan.recordset[i];
            DesignMin[i] = ClientDesignmin.recordset[i]
            //DesignMinjan[i]=ClientDesignminjan.recordset[i]
            console.log(all[i], DesignMax[i], DesignMin[i], DesignMinjan[i])
        }
        res.json({
            all,
            ClientMins,
            DesignMax,
            DesignMaxjan,
            DesignMin

        })

    } catch (error) {
        console.log("erreurs")
    }
})
Statistique.route('/StatGenerals').get(async (req, res) => {
    try {
        const reponse = await sql.connect(config);
        const StatDec = await sql.query("Select CT_Intitule,CA From [STAT_CLIENTS] WHERE CA >'1000000' ");
        //const Statinf= await sql.query("Select CT_Intitule,CA From [STAT_CLIENTS] WHERE CA <'150' ");      
        const Designdec = [];
        const CAdec = [];
        const CAin = [];
        const client = [];
        for (var i = 0; i < 19; i++) {
            Designdec[i] = StatDec.recordset[i].CT_Intitule;
            CAdec[i] = StatDec.recordset[i].CA;
            // CAin[i]=Statinf.recordset[i].CA;
            // client[i]=Statinf.recordset[i].CT_Intitule;
            //console.log(CAdec)
        }
        res.json({
            Designdec,
            CAdec,
            CAin,
            client


        })


    } catch (error) {
        console.log("erreurT")
    }
})

Statistique.route('/StatArticle').get(async (req, res) => {
    try {
        const reponse = await sql.connect(config);
        const Stats = await sql.query("Select CA From [STAT_ARTICLE]");
        const Designdec = [];
        const CAdec = [];
        for (var i = 0; i < 18; i++) {
            CAdec[i] = Stats.recordset[i].CA;
            //console.log(CAdec[i],Designdec[i])
        }
        res.json({
            CAdec
        }
        )
    } catch (error) {
        console.log('pause')
    }
});

Statistique.route('/StatVille').get(async (req, res) => {
    try {
        const reponse = await sql.connect(config);
        const Stats = await sql.query("Select CT_Ville,CA From [STAT_Ville]");
        const DesignVille = [];
        const CA = [];
        const all = [];
        for (var i = 0; i < 70; i++) {
            DesignVille[i] = Stats.recordset[i].CT_Ville;
            CA[i] = Stats.recordset[i].CA;
            all[i] = Stats.recordset[i];

        }
        res.json({
            DesignVille,
            CA,
            all
        }
        )
    } catch (error) {
        console.log('pause')
    }
});

Statistique.route('/StatVilleid/:id').get(async (req, res) => {
    try {
        const reponse = await sql.connect(config);
        const Stats = await sql.query("Select CT_Ville,CA,CT_Intitule From [STAT_Ville] where CA=" + req.params.id);
        const DesignVille = [];
        const CA = [];
        const Nom = [];
        const all = [];
        for (var i = 0; i < 1; i++) {
            DesignVille[i] = Stats.recordset[i].CT_Ville;
            CA[i] = Stats.recordset[i].CA;
            Nom[i] = Stats.recordset[i].CT_Intitule;
            all[i] = Stats.recordset[i];
            console.log(DesignVille[i], CA[i], Nom[i])
        }
        res.json({
            DesignVille,
            CA,
            Nom,
            all
        }
        )
    } catch (error) {
        console.log('pause')
    }
});

Statistique.route('/StatCommercial').get(async (req, res) => {
    try {
        const reponse = await sql.connect(config);
        const Stats = await sql.query("Select CO_Prenom,CA From [STAT_Commercial] where CA >'50000'");
        const Stat = await sql.query("Select CO_Prenom,CA From [STAT_Commercial] where CA <'500'");
        const alls = [];
        const CAMax=[];
        const CAMMin=[];
        const all = [];
        for (var i = 0; i < 10; i++) {
            alls[i] = Stats.recordset[i].CA;
            all[i] = Stat.recordset[i].CA;

        }
        res.json({
            alls,
            all
        }
        )
    } catch (error) {
        console.log('pausTe')
    }
});








module.exports = Statistique;