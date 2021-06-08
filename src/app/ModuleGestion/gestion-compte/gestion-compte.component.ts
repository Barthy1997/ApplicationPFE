import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Camion } from 'app/Model/Camion';
import { Client } from 'app/Model/Client';
import { AuthentifiationService } from 'app/Services/authentifiation.service';
import { CompteService } from 'app/Services/compte.service';

@Component({
  selector: 'app-gestion-compte',
  templateUrl: './gestion-compte.component.html',
  styleUrls: ['./gestion-compte.component.css']
})
export class GestionCompteComponent implements OnInit {

  listeUser;
  listeZone;
  listeCamion:Camion[];
  Client:Client[];
  constructor(private compte:CompteService,private route:Router) { }

  ngOnInit(): void {
    this.listeCamion=[ {
      nom:'barthy',
      prix:'1200'},
      {
        nom:'Clément',
        prix:'1OO'},];
    this.compte.getAllUser().subscribe(data=>{
      this.listeUser=data;
      this.listeUser=this.listeUser.users;
      this.listeZone=this.listeUser.users.listeZone
      //console.log(this.listeZone)
    })

  }
  Supprimer(id)
  {
    this.compte.DeleteOne(id).subscribe(data=>{
      this.compte.getAllUser().subscribe(data=>{
        this.listeUser=data;
        this.listeUser=this.listeUser.users;
      })

    })

  }
  AjoutClient()
  {
    this.route.navigate(['/inscripClient'])
  }
 

}
