import { RouteInfo } from './../../sidebar/sidebar.component';
import { Client } from 'app/Model/Client';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  clt;
  FormClient=new FormGroup({
    ClientName: new FormControl('',Validators.required),
    CommercialName: new FormControl('',Validators.required),
    Adresse: new FormControl('',Validators.required),
    Ville: new FormControl('',Validators.required),
    Region: new FormControl('',Validators.required)

  });
  //tab:{long:"",}
  Clients:Client;
  tr:Client[];
 
  constructor(private activeRoute: ActivatedRoute,private Client:ClientService) { } 
  ngOnInit(): void {
    var myLatlng = new google.maps.LatLng(36.813057638492374, 10.181243617089573);
    var mapOptions = {
      zoom:13,
      center: myLatlng,
      scrollwheel: false, //we disable de scroll over the map, it is a really annoing when you scroll through page
      styles: [{"featureType":"water","stylers":[{"saturation":43},{"lightness":-11},{"hue":"#0088ff"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"hue":"#ff0000"},{"saturation":-100},{"lightness":99}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"color":"#808080"},{"lightness":54}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#ece2d9"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#ccdca1"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#767676"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]},{"featureType":"poi","stylers":[{"visibility":"off"}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#b8cb93"}]},{"featureType":"poi.park","stylers":[{"visibility":"on"}]},{"featureType":"poi.sports_complex","stylers":[{"visibility":"on"}]},{"featureType":"poi.medical","stylers":[{"visibility":"on"}]},{"featureType":"poi.business","stylers":[{"visibility":"simplified"}]}]

    }
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    var marker = new google.maps.Marker({
        position: myLatlng,
        title:"Hello World!"
    });
    marker.setMap(map);
    this.id=this.activeRoute.snapshot.paramMap.get('id');
    console.log(this.id)
    this.Client.getOneClient(this.id).subscribe(data=>{
     this.clt=data
     this.tr=this.clt;
     let RouteInfo=this.tr.map(x=>x.CT_CodeRegion)
     console.log(RouteInfo)
    })
  }

  Update(client)
  {
    console.log(this.FormClient.value)
    this.Client.UpdateClient(this.id,this.FormClient.value).subscribe(data=>{

    })
  }

}
