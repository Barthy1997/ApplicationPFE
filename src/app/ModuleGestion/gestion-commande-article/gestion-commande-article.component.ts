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
		{headerName: 'Make', field: 'make' },
		{headerName: 'Model', field: 'model' },
		{headerName: 'Price', field: 'price'}
	];

	rowData = [
		{ make: 'Toyota', model: 'Celica', price: 35000 },
		{ make: 'Ford', model: 'Mondeo', price: 32000 },
		{ make: 'Porsche', model: 'Boxter', price: 72000 }
	];
  constructor(private Article:GestionArticleService) { }

  ngOnInit(): void {
    this.Article.getAllPhoto().subscribe(data=>{
      
      
    
    });
    
  
  }
 

}
