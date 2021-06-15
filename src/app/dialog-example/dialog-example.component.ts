import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Profil } from 'app/Model/Profil';
import Swal from 'sweetalert2'
import { ProfilService } from 'app/Services/profil.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-example',
  templateUrl: './dialog-example.component.html',
  styleUrls: ['./dialog-example.component.css']
})
export class DialogExampleComponent implements OnInit {
  FormProfil=new FormGroup({
    code_Profil: new FormControl('',Validators.required),
    Intitule:  new FormControl('',[Validators.required]),
  });
  listProfil;
  ProfilExistant:Profil[];
  constructor(private Profil:ProfilService,private fb: FormBuilder,public dialogRef: MatDialogRef<DialogExampleComponent>,
    @Inject(MAT_DIALOG_DATA) private profils:Profil) {
    
   }
   
   onNoClick(): void {
    this.dialogRef.close();
  }
  
  ngOnInit(): void {
    this.Profil.getAllProfil().subscribe(data=>{
      this.listProfil=data;
      this.listProfil=this.listProfil.profils;
      this.ProfilExistant=this.listProfil;
      console.log(this.listProfil)
      console.log(this.ProfilExistant.map(p=>p.Intitule))
    })
  }
  AjoutProfil()
  {
    Swal.fire({
      position:'top-end',
      icon: 'success',
      title: 'Profil Ajouter',
      showConfirmButton: false,
      timer: 1500
    })
    this.Profil.addProfil(this.FormProfil.value).subscribe(
      data=>{
      this.Profil.getAllProfil().subscribe(data=>{
        this.listProfil=data;
        this.listProfil=this.listProfil.profils;
        this.ProfilExistant=this.listProfil;
        console.log(this.listProfil)

      })

     
 })
  
}
}
