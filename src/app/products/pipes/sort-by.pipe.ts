import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.inteface';
let asc:boolean = false
@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(heroes: Hero[], sortBy?: keyof Hero | ""): Hero[] {
    
    switch(sortBy){
      case 'name':
        return heroes.sort((a,b) => (a.name > b.name) ? 1 : -1 )

        case 'canFly':
          return heroes.sort((a,b) => (a.canFly > b.canFly) ? 1 : -1 )

          case 'color':
            
            if(asc){
              asc=false 
            return heroes.sort((a,b) => (a.color > b.color) ? -1 : 1 )
          }else{ 
            asc = true
            return heroes.sort((a,b) => (a.color > b.color) ? 1 : -1 )
          }

            default:
              return heroes;
    }
  }

}
