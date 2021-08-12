import { CompteService } from 'app/Services/compte.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-compte',
  templateUrl: './update-compte.component.html',
  styleUrls: ['./update-compte.component.css']
})
export class UpdateCompteComponent implements OnInit {

  FormCompte=new FormGroup({
    Login: new FormControl('',Validators.required),
    Nom: new FormControl('',Validators.required),
    Prenom: new FormControl('',Validators.required),
    Profil: new FormControl('',Validators.required),
    CT_Num: new FormControl('',Validators.required),
  })
  constructor(private Compte:CompteService,private activeRoute:ActivatedRoute) { }

  user;
  id;
  ngOnInit(): void {
    this.id=this.activeRoute.snapshot.paramMap.get('id');
    this.Compte.getOneCompte(this.id).subscribe(data=>{
      this.user=data;
      this.user=this.user.profil;
      console.log(this.user)
      
  })
  }

  Update()
  {
  this.Compte.UpdateCompte(this.id,this.FormCompte.value).subscribe(data=>{
    
  })
  }
}
