import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CamionnetteService } from 'app/Services/camionnette.service';

@Component({
  selector: 'app-camionnette',
  templateUrl: './camionnette.component.html',
  styleUrls: ['./camionnette.component.css']
})
export class CamionnetteComponent implements OnInit {

  FormCamion:FormGroup;
  listCamion;
  constructor(private fb:FormBuilder,private Camionnette:CamionnetteService,private route:Router) {
    this.FormCamion=this.fb.group({
      Matricule: ['', Validators.required],
      Concessionnaire: ['', Validators.required],
      Type: ['', Validators.required],

    })
   }

  ngOnInit(): void {
  }

  Enregistrer()
  {
    this.Camionnette.AjouterCamion(this.FormCamion.value).subscribe(data=>{
      this.listCamion=data;
      this.route.navigate(['/camionnette'])
    });
  
  }
}
