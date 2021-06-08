import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CamionnetteService } from 'app/Services/camionnette.service';

@Component({
  selector: 'app-gestion-camionnette',
  templateUrl: './gestion-camionnette.component.html',
  styleUrls: ['./gestion-camionnette.component.css']
})
export class GestionCamionnetteComponent implements OnInit {


  listeCamion;
  constructor(private camionnette:CamionnetteService,private route:Router) { }

  ngOnInit(): void {
    this.camionnette.getallCamionnette().subscribe(data=>{
      this.listeCamion=data;
      this.listeCamion=this.listeCamion.camions;
    })
  }

  ajout()
  {
     this.route.navigate(['/AjoutCamionnette'])
  }
  delete(id)
  {
    this.camionnette.deleteOne(id).subscribe(data=>{
      this.camionnette.getallCamionnette().subscribe(data=>{
        this.listeCamion=data;
        this.listeCamion=this.listeCamion.camions;

      })
    })
  }

  update()
  {
    
  }

}
