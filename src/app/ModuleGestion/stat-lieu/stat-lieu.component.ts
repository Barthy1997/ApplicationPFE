import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { StatistiqueService } from 'app/Services/statistique.service';
import Chart from 'chart.js';


@Component({
  selector: 'app-stat-lieu',
  templateUrl: './stat-lieu.component.html',
  styleUrls: ['./stat-lieu.component.css']
})
export class StatLieuComponent implements OnInit {


  Chart;
  listVille;
  CAville;
  CAlieu;
  DesignVill;
  stat;
  NomClient;

  constructor(private Statistique:StatistiqueService,private route:Router) { }

  ngOnInit(): void {
    this.Statistique.getStatLieu().subscribe(data=>{
      this.listVille=data
      this.listVille=this.listVille.all;
      console.log( this.CAville)
    })
    
  }
  selected(data:any)
    {

    this.Statistique.getStatLieubyid(data.target.value).subscribe(data=>{
      this.stat=data;
      this.CAlieu=data;
      this.CAlieu=this.CAlieu.CA;
      this.DesignVill=this.stat.DesignVille;
      this.NomClient=this.stat.Nom;
      console.log(this.CAlieu)

     
      this.Chart = new Chart("myChart", {
        type: 'bar',
        data: {
           labels:[this.DesignVill],
            datasets: [{
              label:this.NomClient,
                data:this.CAlieu,
                backgroundColor: [
                  'Red', 'Orange', 'Yellow', 'Green', 'Blue',
                  'violet','pink','purple','	aqua','salmon',
                  'silver','olive','indigo','crimson','gold',
                  'lime','','White','tan'
                   
                ],
                borderColor: 'rgba(255,99,132,1)',
                fill:false,
                borderWidth: 1,
            }
            ]
            ,
          
        },
        
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });
    })
     
    }
    retour()
    {
      this.route.navigate(['/statAdmin'])

    }
}
