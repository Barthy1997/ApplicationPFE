import { ActivatedRoute } from '@angular/router';
import { GestionArticleService } from 'app/Services/gestion-article.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogExampleComponent } from 'app/dialog-example/dialog-example.component';
import { Profil } from 'app/Model/Profil';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {


  id;
 listCmd;
  constructor(private Article:GestionArticleService,public dialogRef: MatDialogRef<DialogExampleComponent>,
    @Inject(MAT_DIALOG_DATA) private route:ActivatedRoute) { }

    onNoClick(): void {
      this.dialogRef.close();
     
    }

  ngOnInit(): void {
    this.id=localStorage.getItem('commande')
    this.Article.getCommandeById(this.id).subscribe(data=>{
      this.listCmd=data;
      this.listCmd=this.listCmd.cmd
      console.log(this.listCmd)
    })
  }

}
