import { Router } from '@angular/router';
import { StatistiqueService } from './../../Services/statistique.service';
import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.css']
})
export class StatComponent implements OnInit {
  Selected;
  stat;
  stats;
  DesignDec;
  DataDec;
  DesignJan;
  DataJan;
  evolutionCA;
  donnee;
  liste;
  Chart;
  listes;
  listVille;
  CAville;
  courbe;
  Charts; 
  constructor(private Statistique:StatistiqueService,private route:Router) { }

  ngOnInit(): void {
    this.Statistique.getStatAllClient().subscribe(data=>{
      this.stat=data
      this.liste=this.stat.all;
      this.listes=this.stat.CAdec;
      console.log(data)
      
    })
    this.Statistique.getStatLieu().subscribe(data=>{
      this.listVille=data
      this.listVille=this.listVille.all;
      this.CAville=this.CAville;
      console.log( this.CAville)
    })
  }
  selection(data:any)
  {
    this.courbe=data.target.value;
    this.Charts = new Chart("myChart", {
      type: 'bar',
      data: {
          labels: '',
          datasets: [{
              label:this.DesignDec,
              data:this.courbe,
              backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
              ],
              borderColor: 'rgba(255,99,132,1)',
              fill:false,
              borderWidth: 1,
              
          },
        
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
  }
  
  selected(data:any)
  {
    
    this.Statistique.getStatClient(data.target.value).subscribe(data=>{
      this.stats=data
      this.DesignDec=this.stats.Designdec;
      this.DesignJan=this.stats.Designjan;
      this.DataJan=Math.round(this.stats.CAjan);
      this.DataDec=Math.round(this.stats.CAdec);
      this.evolutionCA=Math.round(this.stats.evolutionCA);
      this.donnee=this.stats.CA
      this.stats=this.stats.CAdec;
      console.log(this.stats)
      this.Chart = new Chart("myChart", {
        type: 'bar',
        data: {
            labels: ['Décembre','janvier','EvolutionCA'],
            datasets: [{
                label:this.DesignDec,
                data:this.donnee,
                backgroundColor: [
                  'rgb(255, 99, 132)',
                  'rgb(54, 162, 235)',
                  'rgb(255, 205, 86)'
                ],
                borderColor: 'rgba(255,99,132,1)',
                fill:false,
                borderWidth: 1,
                
            },
          
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

    this.Statistique.getStatOne(data.target.value).subscribe(data=>
      {
           this.stats=data
           this.DesignJan=this.stats
           this.DesignDec=this.stats.Designdec
           this.DataDec=this.stats.CAdec
           this.DataJan=this.stats.CAjan
           this.evolutionCA=this.stats.evolutionCA  
           
      });
    console.log(this.stats,this.DataDec,this.DataJan,"bonjour2")
    
  }
  retour()
    {
      this.route.navigate(['/statAdmin'])

    }
    
}
