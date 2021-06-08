import { Pipe, PipeTransform } from '@angular/core';
import { Catalogue } from 'app/Model/Catalogue';

@Pipe({
  name: 'catalogue'
})
export class CataloguePipe implements PipeTransform {

  transform(Catalogue:Catalogue[],filter:number): Catalogue[] {

    if(!Catalogue||!filter)
    {

    }
        return Catalogue.filter(catalogue=>catalogue.CL_NoParent==filter);
  }

}
