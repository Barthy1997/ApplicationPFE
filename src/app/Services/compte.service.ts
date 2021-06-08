import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CompteService {

  private api='http://localhost:3000/Compte'
  token = localStorage.getItem('token');
  constructor(private http:HttpClient) { }

  getAllUser():Observable<any>
  {
    return this.http.get(this.api+'/all')
  }
  getAllUserCommercial():Observable<any>
  {
    return this.http.get(this.api+'/allCommercial')
  }

  DeleteOne(id:string)
  {
    return this.http.delete(this.api+'/deleteOne/'+id)
  }
}

