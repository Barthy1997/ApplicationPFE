import { Router } from '@angular/router';
import { ClientService } from 'app/Services/client.service';
import { Client } from 'app/Model/Client';
import { CompteService } from './../../Services/compte.service';
import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
    selector: 'user-cmp',
    moduleId: module.id,
    templateUrl: 'user.component.html'
})


export class UserComponent implements OnInit{

user;
id;
constructor(private client:ClientService,private Compte:CompteService,private router:Router) { }
    ngOnInit(){
        const helper = new JwtHelperService();
        const token=helper.decodeToken(localStorage.getItem('token'))
        this.id=token.user.id;
        console.log(this.id)
        this.Compte.getOneCompte(this.id).subscribe(data=>{
            this.user=data;
            this.user=this.user.profil;
        })
        console.log(this.user)
    }
    update()
    {
        this.router.navigate([`UpdateProfil/`+this.id])
    }
}
