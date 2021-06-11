import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from 'app/Services/client.service';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css']
})
export class UpdateClientComponent implements OnInit {

  id;
  clt;
  constructor(private activeRoute: ActivatedRoute,private Client:ClientService) { }
  latitude=33.892166;
  longitude=9.561555499999997;
  ngOnInit(): void {
    
    this.id=this.activeRoute.snapshot.paramMap.get('id');
    console.log(this.id)
    this.Client.getOneClient(this.id).subscribe(data=>{
     this.clt=data
    })
  }

}
