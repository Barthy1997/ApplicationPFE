import { Component, OnInit } from '@angular/core';
import { Article } from 'app/Model/Article';
import { ListParent } from 'app/Model/ListParent';
import { GestionArticleService } from 'app/Services/gestion-article.service';

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
    {headerName: 'MontantHT '       , field: 'DL_MontantHT' , sortable:true,filter:true },
		{headerName: 'PrixUnitaire'     , field: 'DL_PrixUnitaire',sortable:true,filter:true},
    {headerName: 'Conditionnement ' , field: 'EU_Enumere',sortable:true,filter:true},
    {headerName: 'Quantité '        , field: 'EU_Qte'  ,  sortable:true,filter:true},
		{headerName: 'Date'             , field: 'DO_Date' ,  sortable:true,filter:"agDateColumnFilter"},
		//{headerName: 'Price', field: 'price'},
	];

	rowData = [
		{}
  ];
  listCommande;
  constructor(private Article:GestionArticleService) { }

  ngOnInit(): void {
    this.Article.getAllComnade().subscribe(data=>{
      this.listCommande=data;
      this.listCommande=this.listCommande.catalogues;
      new Date();
      this.rowData=this.listCommande;
      console.log(this.listCommande)
      
    });
    
  
  }
 

}
