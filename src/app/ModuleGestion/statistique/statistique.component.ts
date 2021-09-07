import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { StatistiqueService } from 'app/Services/statistique.service';
import Chart from 'chart.js';
import { Line } from 'chartist';
import { Stat } from 'app/Model/Stat';
//import { Stats } from 'fs';

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.css']
})
export class StatistiqueComponent implements OnInit {

  Selected;
  stat;
  stats:any;
  DesignDec;
  DesignJan;
  CAjan;
  CAdec;
  evolutionCA;
  liste;
  Chart;
  listes;
  courbe;
  Max;
  CA:[3,2,3];
  list: Array<any> = new Array(); 
 
 
  constructor(public Statistique:StatistiqueService,private route:Router) { }

  ngOnInit(): void {
    
     this.Statistique.getAllStat().subscribe(data=>{
      this.stat=data
      this.liste=this.stat.alls;
      })  
    
  }

  selected(item:any)
  {
     this.Statistique.getStatArticle(item.target.value).subscribe(data=>{
     this.stats=data;
     this.DesignDec=this.stats.Designdec;
     this.DesignJan=this.stats.Designjan;
     this.CAjan=Math.round(this.stats.CAjan);
     this.CAdec=Math.round(this.stats.CAdec);
     this.evolutionCA=Math.round(this.stats.evolutionCA);
     this.Max=Math.round(this.stats.Max);
     this.list=this.stats.CA;
     console.log(this.Max)
     this.Chart = new Chart("myChart", {
      type: 'bar',
      data: {
         labels: ['Decembre','janvier','evolutionCA'],
          datasets: [{
              label:this.DesignDec,
              data:this.list,
              backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
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
    });
    
   
  }   

  StatClient()
    {
      this.route.navigate(['/statClient'])
    } 
    visualiser()
    {
      
      this.route.navigate(['/statGeneral'])
    }
    retour()
    {
      this.route.navigate(['/statAdmin'])

    }
    
}
