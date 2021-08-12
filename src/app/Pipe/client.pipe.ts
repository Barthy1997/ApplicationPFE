import { Clients } from './../Model/Clients';
import { Pipe, PipeTransform } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Pipe({
  name: 'client'
})
export class ClientPipe implements PipeTransform {

 profil;
  transform(Client:Clients[],filter:number):Clients[]  {
    const helper =new JwtHelperService()
    localStorage.getItem('token')
    this.profil=helper.decodeToken(localStorage.getItem('token'))
    if(!Client||!filter)
    {
       return Client;
    }
  
    return Client.filter(client=>client.CO_No==filter);
  }

}
