import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Camion } from 'app/Model/Camion';
import { AuthentifiationService } from 'app/Services/authentifiation.service';
import { CompteService } from 'app/Services/compte.service';

@Component({
  selector: 'app-register-client',
  templateUrl: './register-client.component.html',
  styleUrls: ['./register-client.component.css']
})
export class RegisterClientComponent implements OnInit {

FormUser: FormGroup;
user:any;
listeCommercial;
listeCamion:Camion[];
  constructor(private fb: FormBuilder, private AuthenService: AuthentifiationService,private Compte:CompteService) {
    this.FormUser = this.fb.group({
      nom: ['', Validators.required],
      codeclient: ['', Validators.required],
      codecommercial: ['', Validators.required],
      Gps: ['', Validators.required],
      adresse: ['', Validators.required],
      jourvisite: ['', Validators.required],
      Zone: ['', Validators.required],
      Szone: ['', Validators.required],
      password: ['', Validators.required],
    });
   }

  ngOnInit(): void {this.listeCamion=[ {
    nom:'Toyota',
    prix:'1200'},
    {
      nom:'BMW',
      prix:'1OO'},];

      this.Compte.getAllUserCommercial().subscribe(data=>{
        this.listeCommercial=data;
       // this.listeCommercial=data.users;
        console.log(this.listeCommercial)
      })
  
}
 

}
