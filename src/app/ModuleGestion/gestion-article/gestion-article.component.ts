import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'app/Model/Article';
import { Catalogue } from 'app/Model/Catalogue';
import { ListParent } from 'app/Model/ListParent';
import Swal from 'sweetalert2'
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
  color;
  
constructor(private Article:GestionArticleService,private route:Router) { }

  ngOnInit(): void {
    this.Article.getAllPhoto().subscribe(data=>{
      this.listeArticle=data;
      this.listeArticle=this.listeArticle.catalogues;
      });
    
 this.Article.getAllPhoto().subscribe(data=>{
    this.listphoto=data;
    this.listphoto=this.listphoto.catalogues;
    console.log(this.listphoto)
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
  Voir(item)
  {
    if(item.STATUT=='Disponible')
    {
      this.color='green';
    }
    Swal.fire({
    title: '<img src="assets/'+item.nomPhoto+'">'+'</br>'+'<span style="font-size:70%">'+'<b>Nom D_Article:</b>'+item.AR_Design+'</span>'+'</br>',
    html:
    
    '<table style="width:100%"> <tr><th style="color:blue">Unite De Vente</th><th>Statut</th><th>Marque</th><th>CO_No</th> </tr> <tr><td>'+item.AR_UniteVen+'</td><td style="color:'+this.color+'">'+item.STATUT+'</td><td>'+item.Marque+'</td><td>'+item.CO_No+'</td></tr></table> ',

      confirmButtonText: 'Retour',
    })
  
    
   
  }
  
  
}
