import { Component, OnInit } from '@angular/core';
import {PersonajesService} from '../../services/personajes/personajes.service'
import {Capitulos} from '../../Models/capitulos'
@Component({
  selector: 'app-capitulos',
  templateUrl: './capitulos.component.html',
  styleUrls: ['./capitulos.component.css']
})
export class CapitulosComponent implements OnInit {

  

  capitulos:any
  array2=[]
  //capitulos2=[]
  capitulosfiltro = ""
  constructor(private personajesservice:PersonajesService) { }

  ngOnInit(): void {
    this.Cargarcapitulos();
  }

  Cargarcapitulos(){
  
    let array:any
    this.personajesservice.CargarCapitulos().subscribe(res=>{
    array = res
     let capitulos2: Capitulos[]  = array.results
     this.capitulos = capitulos2
    })
   
  }
}
