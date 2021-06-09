import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Camion } from 'app/Model/Camion';
import { Client } from 'app/Model/Client';
import { AuthentifiationService } from 'app/Services/authentifiation.service';
import { CompteService } from 'app/Services/compte.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gestion-compte',
  templateUrl: './gestion-compte.component.html',
  styleUrls: ['./gestion-compte.component.css']
})
export class GestionCompteComponent implements OnInit {

  columnDefs = [
		{headerName: 'Login'  ,       field: 'Login',width:150,sortable:true,filter:true  },
		{headerName: 'Nom'    ,       field: 'Nom',sortable:true,width:160,filter:true    },
    {headerName: 'Prenom' ,       field: 'Prenom',sortable:true,width:160,filter:true },
    {headerName: 'Profil' ,       field: 'PROFIL',sortable:true,width:150,filter:true },
		{headerName: 'CO_No'  ,       field: 'CO_NO',sortable:true,width:150, },
    //{headerName: 'Price'  ,      field: 'price',sortable:true }
    
	];

	rowData = [
	{}
	];
  
  listeCompte;
  constructor(private compte:CompteService,private route:Router) { }

  ngOnInit(): void {
    this.compte.getAllUser().subscribe(data=>
          {
            this.listeCompte=data;
            this.listeCompte=this.listeCompte.users;
            console.log(this.listeCompte)
            this.rowData=this.listeCompte;
          })
          //console.log(this.listeCompte)
          
  }
  onRowClicked($event)
{

}
  
  Voir()
  {
    Swal.fire('Oops...', 'Something went wrong!', 'error')

    //this.route.navigate(['/inscripClient'])
  }
 

}
