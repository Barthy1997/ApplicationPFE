import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GestionArticleService {


  private api='http://localhost:3000/ARTICLE';
  constructor(private http:HttpClient) { }

  getAllArticle()
  {
    return this.http.get(this.api+'/AllArticle');
  }
  getAllCatalogue()
  {
    return this.http.get(this.api+'/AllCatalogue');
  }
  getAllPhoto()
  {
    return this.http.get(this.api+'/AllPhoto');
  }


}
