import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
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
  dateConnection;
  constructor(private fb: FormBuilder, private AuthenService: AuthentifiationService,private route:Router) {
    
   }
 
  ngOnInit(): void {
    setTimeout(() => {
      localStorage.removeItem('token');
     this.route.navigate(['']) 
    }, 1000000);
    
  }
  
  
  login()
  {
   console.log(this.FormConnection.get('Username').value,"Bonjour");
   this.AuthenService.Login(this.FormConnection.value).subscribe(data=>{
   this.connection=data;
   this.connection=this.connection.token;
   const helper = new JwtHelperService();
   const decode=helper.decodeToken(this.connection)
   console.log(decode)
   if(data)
   {
     console.log('connection')
     localStorage.setItem('token',this.connection);
     this.route.navigate(['dasboard'])
     this.dateConnection=new Date();
     console.log(Date.now()-this.dateConnection)

     console.log(this.dateConnection,Date.now())
     Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Succès',
      showConfirmButton: false,
      timer: 1000
    })
   }
   if(Date)
   {
   
   }
   else
   
    Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: 'Réessayer Encore',
      showConfirmButton: false,
      timer: 1000
    })

   
    })
    
    
  }

}
