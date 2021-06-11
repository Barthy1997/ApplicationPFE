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
    console.log(item)
    this.Profil.deleteOne(item).subscribe(data=>{
      this.Profil.getAllProfil().subscribe(data=>{
        this.listProfil=data;
        this.listProfil=this.listProfil.profils;
        console.log(this.listProfil)
         })   
    })
  }
  

}
