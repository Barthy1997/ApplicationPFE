import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthentifiationService {

  private api='http://localhost:3000/authentification'
  token = localStorage.getItem('token');
  constructor(private http:HttpClient) { }
  isLoginSubject = new BehaviorSubject<boolean>(this.hasToken()); 

  isLoggedIn() : Observable<boolean> {     
    return this.isLoginSubject.asObservable();
   }

  private hasToken(): boolean {
    return !!localStorage.getItem('token');
  }
  
  InscriptionCommercial(User:object)
  {
    return this.http.post(this.api+'/inscriptionCommercial',User);
  }
  InscriptionClient(User:object)
  {
    return this.http.post(this.api+'/inscriptionClient',User);
  }

  Login(id:object)
  {
    this.isLoginSubject.next(true); 
    return this.http.post<{user:string,resultat:boolean}>(this.api+'/login',id);
  }
  authorisation(token:string)
  {
    return this.http.post(this.api+'/authorisation',token);
  }
  
  

  Deconnection()
  {
    this.isLoginSubject.next(false); 
    return localStorage.removeItem('token');
  }
}
