import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'app/Model/Article';
import { Catalogue } from 'app/Model/Catalogue';
import { ListParent } from 'app/Model/ListParent';
import { GestionArticleService } from 'app/Services/gestion-article.service';

@Component({
  selector: 'app-gestion-article',
  templateUrl: './gestion-article.component.html',
  styleUrls: ['./gestion-article.component.css']
})
export class GestionArticleComponent implements OnInit {

  listeArticle;
  listeArticles:Article[];
  page:number=1;
  Envoyer:number;
  listphoto;
  listeCatalogues;
  listParent:ListParent[];
  listenomParent=[];
  index:number;
  listeRetour=[];
  
constructor(private Article:GestionArticleService,private route:Router) { }

  ngOnInit(): void {
    this.Article.getAllPhoto().subscribe(data=>{
      this.listeArticle=data;
      this.listeArticle=this.listeArticle.catalogues;
      });
    
 this.Article.getAllPhoto().subscribe(data=>{
    this.listphoto=data;
    this.listphoto=this.listphoto.catalogues;
    });

  this.Article.getAllCatalogue().subscribe(data=>{
      this.listeCatalogues=data;
      this.listeCatalogues=this.listeCatalogues.catalogues;
     });
    this.Envoyer=0;
   }
   

  envoyer(nom,elementCatalogue,Intitulecategorie)
  {
   this.Envoyer=nom; 
   this.listeRetour.push(elementCatalogue)
   this.listenomParent.push(Intitulecategorie)
      
  }

  Retour()
  {
    if(this.listeRetour.length<1)
    {
    this.Envoyer=0;
    }
    else{
    this.listeRetour;
    this.listenomParent.pop()
    this.index=this.listeRetour[this.listeRetour.length-1];
     this.Envoyer=this.index;
     this.listeRetour.pop()
    }
   
  }
  
  
}
