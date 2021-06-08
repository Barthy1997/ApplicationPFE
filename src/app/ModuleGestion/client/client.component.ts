import { Component, OnInit } from '@angular/core';
import { ClientService } from 'app/Services/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  constructor(private Client:ClientService) { }

  
  ngOnInit(): void {
    this.Client.getAllClient().subscribe(data=>{

    })
  }

}
