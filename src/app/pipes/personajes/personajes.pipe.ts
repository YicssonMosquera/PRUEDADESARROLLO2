import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'personajes'
})
export class PersonajesPipe implements PipeTransform {

  transform(value: any, args: string ): any {
    const personajes2 = [] 
    for(const personajes of value){
      if((personajes.name.toLowerCase().indexOf(args.toLowerCase()) > -1) || (personajes.status.toLowerCase().indexOf(args.toLowerCase())  > -1) || (personajes.gender.toLowerCase().indexOf(args.toLowerCase())  > -1) || (personajes.species.toLowerCase().indexOf(args.toLowerCase())) > -1)  {
        personajes2.push(personajes)
      };
    };
    return personajes2;
  }

}
