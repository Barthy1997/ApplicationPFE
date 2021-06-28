import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from 'app/Services/client.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

   
    columnDefs = [
    {headerName:'Nom Du Client',   field: 'CT_Intitule', width:160,sortable:true,filter:true },
    {headerName:'Commercial'   ,   field: 'CO_Prenom', width:150,sortable:true,filter:true   },
    {headerName:'Région'       ,   field: 'CT_CodeRegion',width:160,sortable:true,filter:true},
    {headerName:'Adresse',         field: 'CT_Adresse',width:150,sortable:true,filter:true  },
    {headerName:'CT_Num' ,         field: 'CT_Num',width:80,sortable:true,filter:true       },
    {headerName:'Ville'  ,         field: 'CT_Ville',width:150,sortable:true,filter:true    },
    {headerName:'Catégorie Tarifaire',field: 'Categorie',width:180,sortable:true,filter:true}
    
  ];
  listeClient;

 rowData = [{}];
  clt:string;
  ShowSpinner=true;
  constructor(private Client:ClientService,private route:Router) { }

  ngOnInit(): void {
    setTimeout(() => {
    this.ShowSpinner=false;
    }, 2000);
      
    this.Client.getAllClient().subscribe(data=>{
      this.listeClient=data;
      this.listeClient=this.listeClient.client;
      this.rowData=this.listeClient;
    })
  }
  onRowClicked(item:any)
  {
    console.log('bonjour',item.data.CT_Intitule)
    this.route.navigate([`Update/${item.data.CT_Num}`])
  }

}
