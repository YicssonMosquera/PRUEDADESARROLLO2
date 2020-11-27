import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitulos'
})
export class CapitulosPipe implements PipeTransform {

  transform(value: any, args: String): any {
    if (!value) return null
    if (!args) return value
    const resultadocapitulos = []
    for (const capitulos of value) {
      if ((capitulos.name.toLowerCase().indexOf(args.toLowerCase()) > -1) || (capitulos.air_date.toLowerCase().indexOf(args.toLowerCase())) > -1) {
        resultadocapitulos.push(capitulos);
        
      }
    }
    return resultadocapitulos;
  }

}
