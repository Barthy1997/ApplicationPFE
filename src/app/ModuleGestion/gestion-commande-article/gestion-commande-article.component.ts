import { ActivatedRoute, Router } from '@angular/router';
import { Catalogue } from 'app/Model/Catalogue';
import { Component, OnInit } from '@angular/core';
import { Article } from 'app/Model/Article';
import { ListParent } from 'app/Model/ListParent';
import { GestionArticleService } from 'app/Services/gestion-article.service';
import * as moment from 'moment';
import Swal from 'sweetalert2'
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from 'app/dialog/dialog.component';

@Component({
  selector: 'app-gestion-commande-article',
  templateUrl: './gestion-commande-article.component.html',
  styleUrls: ['./gestion-commande-article.component.css']
})
export class GestionCommandeArticleComponent implements OnInit {

  columnDefs = [
		{headerName: "Nom Representant", field: 'CO_Prenom',sortable:true,filter:true },
    {headerName: 'Intitulé Client'  ,field: 'CT_Intitule', sortable:true,filter:true },
		{headerName: 'N°BonCommande'    ,field: 'DO_Piece',sortable:true,filter:true},
    {headerName: 'MontantTTC'       ,field: 'DL_MontantTTC',filter:true},
    {headerName:'Date'              ,field: 'DO_Date',filter:'agDateColumnFilter',
    filterParams: {
      clearButton:true,
      debounceMs: 500,
      suppressAndOrCondition: true,
      comparator: function(filterLocalDateAtMidnight, cellValue) {
        console.log(cellValue)
        const date=new Date(cellValue);
         date.setHours(0,0,0,0);
        if (cellValue == null) {
          return 0;
        }
        var dateParts = cellValue.split("/");
        var year = Number(dateParts[2]);
        var month = Number(dateParts[1]) - 1;
        var day = Number(dateParts[0]);
        var cellDate = new Date(year, month, day);

        if (date < filterLocalDateAtMidnight) {
          return -1;
        } else if (date > filterLocalDateAtMidnight) {
          return 1;
        } else {
          return 0;
        }
      }
    }}
    
	];

	rowData = [ 
		{}
  ];
  listCommande;
  listeDate;
  listCmd;
  tab=[];
  tabdate:[];
  constructor(private Article:GestionArticleService,private router:Router,private dialog:MatDialog) { }

  ngOnInit(): void {
    this.Article.getAllComnade().subscribe(data=>{
      this.listCommande=data;
      this.listeDate=data;
      this.listCommande=this.listCommande.catalogues;
      this.listeDate=this.listeDate.date;
      this.tab.push(this.listeDate);
      this.rowData=this.listCommande
      this.tab;
    });
    
    
  
  }
  historique()
  {
    
  }
  onRowClicked(item:any)
  {
    this.router.navigate(['Commande/'+item.data.DO_Piece])
    localStorage.setItem('commande',item.data.DO_Piece);
    this.Article.getCommandeById(item.data.DO_Piece).subscribe(data=>{
      this.listCmd=data;
      this.listCmd=this.listCmd.cmd
      console.log(this.listCmd)
    })
    
    const dialogRef = this.dialog.open(DialogComponent,{
      backdropClass: 'backdropBackground'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.listCmd;
      console.log(`Dialog result: ${result}`);
    });


  }

}
