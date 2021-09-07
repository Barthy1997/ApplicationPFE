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

getStatOne(id)
{
  return this.http.get(this.api+'/StatOn/'+id)
}
getStatArticle(id)
{ 
  return this.http.get(this.api+'/StatOne/'+`${id}`)
}
 getStatFamille()
 {
   return this.http.get(this.api+'/StatArticle')
 }
 getStatClient(id)
 {
   return this.http.get(this.api+'/StatClient/'+`${id}`)
 }
 getStatAllClient()
 {
   return this.http.get(this.api+'/AllClient/')
 }

 getStatGeneral()
 {
  return this.http.get(this.api+'/StatGeneral')

 }
 getStatGenerals()
 {
  return this.http.get(this.api+'/StatGenerals')

 }

 getStatLieu()
 {
  return this.http.get(this.api+'/StatVille')

 }
 getStatLieubyid(id)
 {
  return this.http.get(this.api+'/StatVilleid/'+`${id}`)
 }
 getStatCommercial()
 {
  return this.http.get(this.api+'/StatCommercial')

 }

}
