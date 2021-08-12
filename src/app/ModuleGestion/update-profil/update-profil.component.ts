import { ActivatedRoute, Router } from '@angular/router';
import { CompteService } from 'app/Services/compte.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2'

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
    Nom: new FormControl('',Validators.required),
    Prenom: new FormControl('',Validators.required),
  })
  
  constructor(private Compte:CompteService,private activeRoute: ActivatedRoute,private router:Router) { }

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
  
    this.Compte.UpdateProfil(this.id,this.FormProfil.value).subscribe(data=>{

    })
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Modification Réussie ',
      showConfirmButton: false,
      timer: 1000
    })
    
this.router.navigate([''])
  }

}
