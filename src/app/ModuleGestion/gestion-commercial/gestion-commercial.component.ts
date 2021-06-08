import { Component, OnInit } from '@angular/core';
import { Camion } from 'app/Model/Camion';
import { Client } from 'app/Model/Client';
import { CompteService } from 'app/Services/compte.service';

@Component({
  selector: 'app-gestion-commercial',
  templateUrl: './gestion-commercial.component.html',
  styleUrls: ['./gestion-commercial.component.css']
})
export class GestionCommercialComponent implements OnInit {

  listeUser;
  listeZone;
  listeCamion:Camion[];
  Client:Client[];
  constructor(private Compte:CompteService) { }

  ngOnInit(): void {
    this.listeCamion=[ {
      nom:'barthy',
      prix:'1200'},
      {
        nom:'Clément',
        prix:'1OO'},];
    this.Compte.getAllUserCommercial().subscribe(data=>{
      this.listeUser=data;
      this.listeUser=this.listeUser.users;
      //this.listeZone=this.listeUser.users.listeZone
    })
  }

}
