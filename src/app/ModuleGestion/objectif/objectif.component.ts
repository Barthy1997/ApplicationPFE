import { Component, OnInit } from '@angular/core';
import { GestionArticleService } from 'app/Services/gestion-article.service';

@Component({
  selector: 'app-objectif',
  templateUrl: './objectif.component.html',
  styleUrls: ['./objectif.component.css']
})
export class ObjectifComponent implements OnInit {

  listePhoto;
  constructor(private GestionArticle:GestionArticleService) { }

  ngOnInit(): void {
    this.GestionArticle.getAllPhoto().subscribe(data=>{
      this.listePhoto=data;
      this.listePhoto=this.listePhoto.catalogues;
    })
    
  }

}
