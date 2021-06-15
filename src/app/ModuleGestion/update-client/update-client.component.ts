import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from 'app/Services/client.service';
declare var google: any;

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css']
})
export class UpdateClientComponent implements OnInit {

  id;
  center=google.maps.LatLngLiteral;
  clt;
  zoom = 12
  title="Tunis"
  position=new google.maps.LatLng(33.892166, 9.561555499999997);
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 20,
    minZoom: 8,
  }

  constructor(private activeRoute: ActivatedRoute,private Client:ClientService) { }
   
  ngOnInit(): void {
    navigator
    
  navigator.geolocation.getCurrentPosition((position)=>{
    this.center={
      lat:33.892166,
      lng:9.561555499999997
    }
   // navigator.geolocation.getCurrentPosition()



    
  
    
  })

    this.id=this.activeRoute.snapshot.paramMap.get('id');
    console.log(this.id)
    this.Client.getOneClient(this.id).subscribe(data=>{
     this.clt=data
    })
  }

}
