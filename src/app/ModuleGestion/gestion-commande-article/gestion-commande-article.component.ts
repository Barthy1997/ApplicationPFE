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
		{headerName: 'Nom', field: 'Nom' },
		{headerName: 'Prenom', field: 'Prenom' },
		{headerName: 'Price', field: 'price'}
	];

	rowData = [
		{}
	];
  constructor(private Article:GestionArticleService) { }

  ngOnInit(): void {
    this.Article.getAllPhoto().subscribe(data=>{
      
      
    
    });
    
  
  }
 

}
