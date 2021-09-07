import { StatistiqueService } from 'app/Services/statistique.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Chart from 'chart.js';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  Chart;
  DesignMax:object;
  CAMax;
  DesignMin;
  CAMin;
  stat;
  constructor(private route:Router,private Statistique:StatistiqueService) { }

  ngOnInit(): void {
    this.Statistique.getStatCommercial().subscribe(data=>{
      console.log(data)
      this .stat=data;
      this.DesignMax=this.stat.all
      console.log(Object.keys(this.DesignMax))
      //this.CAMax=this.stat.all.get('CO_Prenom');
      console.log( this.CAMax)

    })
  }
  visualiser(id)
  {
    if(id==1)
    {
      this.route.navigate(['/statClient'])

    }
    if(id==2)
    {
      this.route.navigate(['/stat'])

    }
    if(id==3)
    {
      this.route.navigate(['/statLieu'])

    }
    if(id==4)
    {
      this.route.navigate(['/statGeneral'])

    }

  }
}
