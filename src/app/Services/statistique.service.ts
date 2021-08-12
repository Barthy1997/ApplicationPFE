import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class StatistiqueService {

  private api='http://localhost:3000/Statistique';
  constructor(private http:HttpClient) { }

  getAllStat()
  {
    return this.http.get(this.api+'/AllStat')
  }
}
