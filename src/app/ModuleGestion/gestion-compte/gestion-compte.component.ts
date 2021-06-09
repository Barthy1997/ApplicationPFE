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
		{headerName: 'CT_Num', field: 'CT_Num',sortable:true },
		{headerName: 'CT_Intitule', field: 'CT_Intitule',sortable:true},
    {headerName: 'CT_Type', field: 'price',sortable:true},
    {headerName: 'Make', field: 'make',sortable:true },
		{headerName: 'Model', field: 'model',sortable:true},
    {headerName: 'Price', field: 'price',sortable:true}
    
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
          })
          console.log(this.listeCompte)
          this.rowData=this.listeCompte;
  }
  

  
  Voir()
  {
    Swal.fire('Oops...', 'Something went wrong!', 'error')

    //this.route.navigate(['/inscripClient'])
  }
 

}
