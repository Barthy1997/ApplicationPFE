import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentifiationService } from 'app/Services/authentifiation.service';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {

  FormConnection:FormGroup;
  connection;
  constructor(private fb: FormBuilder, private AuthenService: AuthentifiationService,private route:Router) {
    this.FormConnection=this.fb.group({
      Username: ['', Validators.required],
      password: ['', Validators.required],
    });
   }

  ngOnInit(): void {
  }
  login()
  {
    this.AuthenService.Login(this.FormConnection.value).subscribe(data=>{
   this.connection=data;
console.log(this.connection,"Bonjour");
    })
    
    
  }

}
