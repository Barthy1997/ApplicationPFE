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

  getAllUser()
  {
    return this.http.get(this.api+'/AllCompte')
  }
  getAllUserCommercial()
  {
    return this.http.get(this.api+'/allCommercial')
  }
  getOneCompte(id:string)
  {
    return this.http.get(this.api+'/OneCompte/'+id)
  }

  DeleteOne(id:string)
  {
    return this.http.delete(this.api+'/deleteOne/'+id)
  }
  UpdateProfil(id:string,User:object)
  {
    return this.http.put(this.api+'/UpdateProfil/'+id,User)
  }
  UpdateCompte(id:string,User:object)
  {
    return this.http.put(this.api+'/UpdateCompte/'+id,User)
  }
}

