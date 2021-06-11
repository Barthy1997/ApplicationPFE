import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {
  private api='http://localhost:3000/Profil';
  constructor(private http:HttpClient) { }
  getAllProfil()
  {
    return this.http.get(this.api+'/AllProfil')

  }
  addProfil(profil)
  {
     return this.http.post(this.api+'/AjoutProfil',profil)
  }
  deleteOne(id)
  {
    return this.http.delete(this.api+`/deleteOne/'${id}'`);
  }
}
