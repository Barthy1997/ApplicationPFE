import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthentifiationService } from 'app/Services/authentifiation.service';

@Component({
  selector: 'app-ajout-user',
  templateUrl: './ajout-user.component.html',
  styleUrls: ['./ajout-user.component.css']
})
export class AjoutUserComponent implements OnInit {

  FormUser=new FormGroup({
  Login: new FormControl('',Validators.required),
  Passeword: new FormControl('',Validators.required),
  Profil:new FormControl('',Validators.required),
  Nom: new FormControl('',Validators.required),
  Prenom: new FormControl('',Validators.required),
  RegistrationID: new FormControl('',Validators.required),
  N_cattarif: new FormControl('',Validators.required),
  CO_NO:new FormControl('',Validators.required),
  CT_Num: new FormControl('',Validators.required),}); 
  constructor(private auth:AuthentifiationService) { 
   
  }

  ngOnInit(): void {
  }
  inscription()
  {
  this.auth.InscriptionUser(this.FormUser.value).subscribe(data=>{
    
  })
  console.log(this.FormUser.value)
  }
}
