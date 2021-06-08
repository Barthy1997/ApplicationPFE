import { Pipe, PipeTransform } from '@angular/core';
import { Article } from 'app/Model/Article';

@Pipe({
  name: 'liste'
})
export class ListePipe implements PipeTransform {

  transform(Article:Article[],filter:number):Article[]  {
    if(!Article||!filter)
    {
      return Article; 
    }
    return Article.filter(article=>article.CL_No1==filter||article.CL_No2==filter ||article.CL_No3==filter ||article.CL_No4==filter);
  }

}
