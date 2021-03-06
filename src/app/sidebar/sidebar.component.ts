import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'app/Model/Article';
import { GestionArticleService } from 'app/Services/gestion-article.service';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard',     title: 'Dashboard',         icon:'nc-bank',       class: '' },
    { path: '/user',          title: 'User Profile',      icon:'nc-single-02',  class: '' },
    { path: '/Gestion',       title: 'Gestion',   icon:'nc-icon nc-bullet-list-67', class: '' },
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    listeArticle;
    listeArticles:Article[];
    Envoyer:number;
    famille;
    listeCatalogues;
    somme:number=0;
    constructor(private Article:GestionArticleService,private route:Router) { }
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);

          this.Envoyer=0;
         }
         envoyer(nom)
         {
          this.Envoyer=nom;
           console.log(this.Envoyer)
             
         }
         Retour()
         {
           this.Envoyer=0;
           
         }
    }

