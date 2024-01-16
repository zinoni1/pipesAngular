import {Pipe, PipeTransform} from '@angular/core'
@Pipe({
    name: 'canFly'
})
export class canFly implements PipeTransform{
    transform(value: boolean): 'Vuela'|'No vuela' {
        
        if(value){
            return ('Vuela')
        }else{
            return('No vuela')
        }
        
    }
}