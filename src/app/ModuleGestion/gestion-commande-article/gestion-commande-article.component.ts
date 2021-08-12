import { Component, OnInit } from '@angular/core';
import { Article } from 'app/Model/Article';
import { ListParent } from 'app/Model/ListParent';
import { GestionArticleService } from 'app/Services/gestion-article.service';
import * as moment from 'moment';

@Component({
  selector: 'app-gestion-commande-article',
  templateUrl: './gestion-commande-article.component.html',
  styleUrls: ['./gestion-commande-article.component.css']
})
export class GestionCommandeArticleComponent implements OnInit {

  columnDefs = [
		{headerName: "Nom de l'article ", field: 'DL_Design',sortable:true,filter:true },
		{headerName: 'AR_Ref'           , field: 'AR_Ref',   sortable:true,filter:true },
    {headerName: 'MontantTTC'       , field: 'DL_MontantTTC', sortable:true,filter:true },
		{headerName: 'PrixUnitaire'     , field: 'DL_PrixUnitaire',sortable:true,filter:true},
    {headerName: 'Conditionnement ' , field: 'EU_Enumere',sortable:true,filter:true},
    {headerName: 'Date'             , field: 'DO_Date' ,filter:true},
    {headerName: 'Nom Client'       , field: 'CT_Intitule'  ,sortable:true,filter:true},
    {headerName: 'Nom Commercial'   , field: 'CO_Prenom' ,filter:true,sortable:true},
    
		//{headerName: 'Price', field: 'price'},
	];

	rowData = [ 
		{}
  ];
  listCommande;
  listeDate;
  tab=[];
  tabdate:[];
  constructor(private Article:GestionArticleService) { }

  ngOnInit(): void {
    this.Article.getAllComnade().subscribe(data=>{
      this.listCommande=data;
      this.listeDate=data;
      this.listCommande=this.listCommande.catalogues;
      this.listeDate=this.listeDate.date;
      this.tab.push(this.listeDate);
      if(this.tab.filter(x=>x==new Date())==null)
      {
        this.rowData=[]
      }
      //this.tab.filter(x=>x==new Date())
      //console.log(this.listeDate+'bonjour')
     //console.log("bbb"+this.listCommande.map(x=>x.DO_Date));
      new Date();
      this.tab
      //this.rowData=this.listCommande;
      //console.log(this.listCommande.CO_No+'bttt')
      //console.log(this.rowData)
      
    });
    
    
  
  }
  historique()
  {
    this.rowData=this.listCommande
  }

}
