import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentifiationService } from 'app/Services/authentifiation.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {

  FormConnection=new FormGroup({
    Username: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  });
  connection;
  constructor(private fb: FormBuilder, private AuthenService: AuthentifiationService,private route:Router) {
    
   }

  ngOnInit(): void {
  }
  login()
  {
  
   console.log(this.FormConnection.get('Username').value,"Bonjour");
   this.AuthenService.Login(this.FormConnection.value).subscribe(data=>{
   this.connection=data;
   this.connection=this.connection.token;
   if(data)
   {
     console.log('connection')
     localStorage.setItem('token',this.connection);
     this.route.navigate(['dasboard'])
     let date=new Date();
     console.log(date)
     Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Succès',
      showConfirmButton: false,
      timer: 1000
    })
   }
   else{
    Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: 'Réessayer Encore',
      showConfirmButton: false,
      timer: 1000
    })
   }
    })
    
    
  }

}
