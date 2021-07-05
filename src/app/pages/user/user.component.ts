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
constructor(private client:ClientService) { }
    ngOnInit(){
        const helper = new JwtHelperService();
        const token=helper.decodeToken(localStorage.getItem('token'))
        this.user=token.user
    }
    update()
    {
        
    }
}
