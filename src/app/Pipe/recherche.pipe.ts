import { Pipe, PipeTransform } from '@angular/core';
import { Client } from 'app/Model/Client';

@Pipe({
  name: 'recherche'
})
export class RecherchePipe implements PipeTransform {

  transform(Client:Client[],recherche :string):Client[]  {
    if(!Client||!recherche)
    {
      return Client; 
    }
    return Client.filter(Client=>Client.Login.toLowerCase().indexOf(recherche.toLowerCase())!==-1 || Client.Nom.toLowerCase().indexOf(recherche.toLowerCase())!==-1 ||Client.CO_NO==parseInt(recherche));
  }

}
