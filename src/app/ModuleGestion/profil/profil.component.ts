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

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

 Supprimer(item)
  {

    

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
      Swal.fire({
      icon: 'success',
      title: 'Confirmer Suppression',
      showCancelButton: true,
      confirmButtonText: 'Look up',
      showLoaderOnConfirm: true,
      preConfirm:()=>{
        return this.Profil.getAllProfil().subscribe(data=>{
          this.listProfil=data;
          this.listProfil=this.listProfil.profils;
          console.log(this.listProfil)
           })   
      }
        })
      }
    })





   
  }
  

}
