import { Component, OnInit } from '@angular/core';
import { ProfilService } from 'app/Services/profil.service';
import {MatDialog} from '@angular/material/dialog';
import Swal from 'sweetalert2'
import { DialogExampleComponent } from 'app/dialog-example/dialog-example.component';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  listProfil;
  constructor(private Profil:ProfilService,private dialog:MatDialog) { }

  ngOnInit(): void {
    this.Profil.getAllProfil().subscribe(data=>{
   this.listProfil=data;
   this.listProfil=this.listProfil.profils;
   console.log(this.listProfil)
    })

  }

  addProfil()
  {
    const dialogRef = this.dialog.open(DialogExampleComponent);
    //dialogRef.beforeClosed().subscribe()
    dialogRef.afterClosed().subscribe(result => {
      this.listProfil;
      console.log(`Dialog result: ${result}`);
    });
  }

 Supprimer(item)
  {
    Swal.fire({
      title: 'Supprimer Profil',
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
        return this.Profil.deleteOne(item).subscribe(data=>{
          this.Profil.getAllProfil().subscribe(data=>{
            this.listProfil=data;
            this.listProfil=this.listProfil.profils;
            console.log(this.listProfil)
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





   
  }
  

}
