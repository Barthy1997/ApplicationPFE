import { StatistiqueService } from './../../Services/statistique.service';
import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';


@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.css']
})
export class StatComponent implements OnInit {

  constructor(private Statistique:StatistiqueService) { }
  
  list;
  stat;
  autre;
  courbe;
  Chart;
  rowData = [ ];
 
  ngOnInit(): void {
    this.Statistique.getAllStat().subscribe(data=>{
      this.stat=data
      this.list=this.stat.Nom
      this.autre=this.stat.Depot
      this.courbe=this.stat.dt;
      this.stat=this.stat.CA 
      console.log(this.list)
      this.rowData.push(this.list)
      console.log(this.stat,this.list,this.rowData)

      this.Chart = new Chart("myChart", {
        type: 'line',
        data: {
            labels: this.list,
            datasets: [{
                label: "Chiffre D'affaire",
                data: this.stat,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 109, 64, 0.2)',
                    'rgba(255, 69, 64, 0.2)',
                    'rgba(255, 34, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
                
            },{
            label: "Chiffre D'affaire",
            data: [12,345,0,2458,76,2345],
            backgroundColor: [
              'rgba(55, 234, 0, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 109, 64, 0.2)',
              'rgba(255, 69, 64, 0.2)',
              'rgba(255, 34, 64, 0.2)',
          ],

            }]
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
 
}
