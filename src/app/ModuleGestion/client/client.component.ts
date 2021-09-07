import { Clients } from './../../Model/Clients';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from 'app/Services/client.service';
//import {FilterService} from 'primeng/api';
import Swal from 'sweetalert2'
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

   
    columnDefs = [
    {headerName:'Nom Du Client',   field: 'CT_Intitule', width:180,sortable:true,filter:true },
    //{headerName:'Commercial'   ,   field: 'CO_Prenom', width:180,sortable:true,filter:true   },
    {headerName:'Région'       ,   field: 'CT_CodeRegion',width:160,sortable:true,filter:true},
    {headerName:'Adresse',         field: 'CT_Adresse',width:200,sortable:true,filter:true  },
    {headerName:'CT_Num' ,         field: 'CT_Num',width:130,sortable:true,filter:true       },
    {headerName:'Ville'  ,         field: 'CT_Ville',width:150,sortable:true,filter:true    },
    {headerName:'Catégorie Tarifaire',field: 'Categorie',width:180,sortable:true,filter:true}
    
  ];
  listeClient;
  client:Clients;
 
 rowData = [{}];
  clt:string;
  ShowSpinner=true;
  user;
  constructor(private Client:ClientService,private route:Router) { }

  ngOnInit(): void {
    setTimeout(() => {
    this.ShowSpinner=false;
    }, 2000);
      
    this.Client.getAllClient().subscribe(data=>{
      this.listeClient=data;
      this.listeClient=this.listeClient.client;
      this.rowData=this.listeClient;
      //console.log("bgfsffrtyurtyuiuytyuf")
    })
    const helper = new JwtHelperService();
    localStorage.getItem('token')
    this.user=helper.decodeToken(localStorage.getItem('token'))
    this.user=this.user.user.CO_NO
    ///console.log(this.user,"bonjour ")
  }
  onRowClicked(item:any)
  {
    console.log('bonjour',item.data.CT_Intitule)
    this.route.navigate([`Update/${item.data.CT_Num}`])
  
  }

}
