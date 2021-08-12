import { Router } from '@angular/router';
import { CompteService } from 'app/Services/compte.service';
import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRenderer, ICellRendererComp } from 'ag-grid-community';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-cell-custom',
  templateUrl: './cell-custom.component.html',
  styleUrls: ['./cell-custom.component.css']
})
export class CellCustomComponent implements OnInit ,ICellRendererAngularComp{

  id;
  listCompte
  constructor(private Compte:CompteService,private route:Router) { }

  ngOnInit(): void {
    
  }
  Update()
  {
    this.route.navigate(['UpdateCompte/'+3])
    }
  Delete()
  {
    Swal.fire({
      title: 'Supprimer Compte',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmer'
    }).then((result) => {
      if (result.isConfirmed) {
      Swal.fire({
        title: 'Confirmer',
        icon: 'warning',
        preConfirm:()=>{
        return this.Compte.DeleteOne(this.id.data.id).subscribe(data=>{
          this.route.navigate(['/Compte'])
          this.Compte.getAllUser().subscribe(data=>{
            this.listCompte=data;
            this.listCompte=this.listCompte;
            console.log(this.listCompte)
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Profil Supprimer',
              showConfirmButton: false,
              timer: 1500
            })
             })
             
           })   
      }
        })
      }
    })
    console.log(this.id.data.id)
  }

  agInit(parms:any)
  {
    this.id=parms;
    console.log(parms)
  }
  refresh(parms:any)
  {
    return true;
  }
}
