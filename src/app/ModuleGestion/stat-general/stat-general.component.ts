import { StatistiqueService } from 'app/Services/statistique.service';
import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';

@Component({
  selector: 'app-stat-general',
  templateUrl: './stat-general.component.html',
  styleUrls: ['./stat-general.component.css']
})
export class StatGeneralComponent implements OnInit {

  constructor(private Statistique:StatistiqueService) { }
  
  liste;
  Chart;
  Charts
  stat;
  statOne;
  stats;
  Client;
  CAClient;
  CAClientinf;
  Clientinf;
  CAMax;
  CAMaxjan;
  CAMin;
  CAMinjan;
  ClientCAMAx;
  ClientCAMAxjan;
  ClientCAmIN;
  ClientCAmINjan;
  StatDesign;
  StatCA;

  ngOnInit(): void {
    this.Statistique.getStatGeneral().subscribe(data=>{
      this.stats=data
      this.CAMax=this.stats.all;
      this.ClientCAMAx=this.stats.DesignMax;
      this.CAMaxjan=this.stats.ClientMaxjan;
      this.ClientCAMAx=this.stats.DesignMaxjan;
  

    })
    this.Statistique.getStatGenerals().subscribe(data=>
      {
        this.stat=data;
        this.CAClient=this.stat.CAdec;
        this.Client=this.stat.Designdec;
        this.CAClientinf=this.stat.CAinf,
        this.Clientinf=this.stat.clientName
        console.log(data)
        this.Chart = new Chart("myChart", {
          type: 'doughnut',
          data: {
             labels:this.Client,
              datasets: [{
                  data:this.CAClient,
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

  visualiser()
  {
   this.Statistique.getStatFamille().subscribe(data=>{
   this.statOne=data;
   this.StatDesign=this.statOne.Designdec;
   this.StatCA=this.statOne.CAdec;
   console.log(this.StatCA)
      this.Chart = new Chart("myChart", {
        type: 'doughnut',
        data: {
           labels:this.StatDesign,
            datasets: [{
                data:this.StatCA,
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
    console.log(this.StatCA)
  }
  
}
