import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private api='http://localhost:3000/CLIENT';
  constructor(private http:HttpClient) { }

  getAllClient()
  {
    return this.http.get(this.api +'/AllClient');
  }
  getOneClient(id:String)
  {
    return this.http.get(this.api +'/OneClient/'+id);
  }
}
