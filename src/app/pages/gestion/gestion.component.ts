 import { Component, OnInit } from '@angular/core';
import { AuthentifiationService } from 'app/Services/authentifiation.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-gestion',
  moduleId: module.id,
  templateUrl: 'gestion.component.html'
})
export class GestionComponent implements OnInit {

  user;
  profil;
  constructor(private auth:AuthentifiationService) { }

  ngOnInit(): void {
    const helper = new JwtHelperService();
    const token=helper.decodeToken(localStorage.getItem('token'))
    this.user=token.user
    this.profil=this.user.PROFIL
    console.log(this.profil)
  }

}
