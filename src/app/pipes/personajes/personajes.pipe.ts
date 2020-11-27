import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'personajes'
})
export class PersonajesPipe implements PipeTransform {

  
  transform(value: any, args: String): any {
    if (!value) return null
    if (!args) return value
    const resultadopersonajes = []
    for (const personajes of value) {
      if ((personajes.name.toLowerCase().indexOf(args.toLowerCase()) > -1)||  (personajes.gender.toLowerCase().indexOf(args.toLowerCase())) > -1) {
        resultadopersonajes.push(personajes);
        
      }
    }
    return resultadopersonajes;
  }

}
