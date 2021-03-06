import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Camion } from 'app/Model/Camion';
import { AuthentifiationService } from 'app/Services/authentifiation.service';

@Component({
  selector: 'app-register-commercial',
  templateUrl: './register-commercial.component.html',
  styleUrls: ['./register-commercial.component.css']
})
export class RegisterCommercialComponent implements OnInit {

  FormUser:FormGroup;

 listeCamion:Camion[];
 nombre:any;

  constructor(private fb:FormBuilder,private authenService:AuthentifiationService) {
    this.FormUser = this.fb.group({
      login: ['', Validators.required],
      Psw: ['', Validators.required],
      Profil: ['', Validators.required],
      Nom: ['', Validators.required],
      Prenom: ['', Validators.required],
      RegistrationID: ['', Validators.required],
      N_cattarif: ['', Validators.required],
      CT_Num: ['', [Validators.required],],
    });
   }

  ngOnInit(): void {
    this.listeCamion=[ {
      nom:'Toyota',
      prix:'1200'},
      {
        nom:'Corolla',
        prix:'100'},];
    this.nombre=4;
  }
  inscription()
  {
    this.authenService.InscriptionCommercial(this.FormUser.value).subscribe(
      data=>{
        
      }
    )
  }

}
