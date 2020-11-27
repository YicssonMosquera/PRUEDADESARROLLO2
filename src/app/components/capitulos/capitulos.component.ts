import { Component, OnInit } from '@angular/core';
import {PersonajesService} from '../../services/personajes/personajes.service'

@Component({
  selector: 'app-capitulos',
  templateUrl: './capitulos.component.html',
  styleUrls: ['./capitulos.component.css']
})
export class CapitulosComponent implements OnInit {

  capitulos:any 
  capitulosfiltro = ""
  constructor(private personajesservice:PersonajesService) { }

  ngOnInit(): void {
    this.Cargarcapitulos();
  }

  Cargarcapitulos(){
  
    let array:any
    let nuevo:any
    this.personajesservice.CargarCapitulos().subscribe(res=>{
    array = res
      this.capitulos = array.results
    })
    
  }
}
