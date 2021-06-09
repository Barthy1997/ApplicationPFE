import { Component, OnInit } from '@angular/core';
import { ClientService } from 'app/Services/client.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

   
    columnDefs = [
		{headerName:'Nom ',          field: 'CT_Intitule', width:100,filter:true},
		{headerName:'CT_Type',       field: 'CT_Type',width:100,filter:true },
    {headerName:'Région',        field: 'CT_CodeRegion',width:100,filter:true},
    {headerName:'CO_No',         field: 'CO_No',width:100,filter:true },
		{headerName:'Nom Commercial',field: 'CO_Prenom',width:100,filter:true },
    {headerName:'CT_Qualite',    field: 'CT_Qualite',width:100,filter:true},
    {headerName:'Adresse',       field: 'CT_Adresse',width:100},
    {headerName:'N_CatTarif',    field: 'N_CatTarif',width:100},
    {headerName:'CT_Num',        field: 'CT_Num',width:100}
    
  ];
  listeClient;

 rowData = [{}];
  
  constructor(private Client:ClientService) { }

  
  ngOnInit(): void {
    this.Client.getAllClient().subscribe(data=>{
      this.listeClient=data;
      this.listeClient=this.listeClient.client;
      //console.log(this.listeClient)
      this.rowData=this.listeClient;
    })
    ///this.rowData.push(this.listeClient)   
  }
  onRowClicked(item:any)
  {
    Swal.fire({
      title: '<img src="assets/'+item.nomPhoto+'">'+'</br>'+'<span style="margin:auto;padding: 10px;font-size:15px;word-wrap: break-word;">'+'Nom D_Article:'+item.AR_Design+'</span>'+'</br>'+'<span style="margin: auto;padding: 10px;font-size:15px;word-wrap: break-word;">'+'CO_No:'+item.CO_No+'</span>'+'</br>'+'<span style="margin: auto;padding: 10px;font-size:15px;word-wrap: break-word;">'+'Statut:'+item.STATUT+'</span>',
      text: '',
      confirmButtonText: 'Retour',
      
    })
  }

}
