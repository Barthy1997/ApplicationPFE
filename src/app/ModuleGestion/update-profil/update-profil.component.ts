import { ActivatedRoute } from '@angular/router';
import { CompteService } from 'app/Services/compte.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-profil',
  templateUrl: './update-profil.component.html',
  styleUrls: ['./update-profil.component.css']
})
export class UpdateProfilComponent implements OnInit {

  id;
  user;
  FormProfil=new FormGroup({
    Login: new FormControl('',Validators.required),
    Prenom: new FormControl('',Validators.required),
    PROFIL: new FormControl('',Validators.required),
  })
  
  constructor(private Compte:CompteService,private activeRoute: ActivatedRoute) { }

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
    this.Compte.Update(this.id,this.FormProfil.value).subscribe(data=>{

    })
 
  }

}
