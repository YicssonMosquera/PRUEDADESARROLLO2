import { Component, OnInit } from '@angular/core';
import {PersonajesService} from '../../services/personajes/personajes.service'
@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {
  
 personajes:any 
personajesfiltro = ""
  constructor(private personajesservice:PersonajesService) { }

  ngOnInit(): void {
    this.CargarPersonajes()
  }

  CargarPersonajes(){
  
    let array:any
    let nuevo:any
    this.personajesservice.CargarPersonajes().subscribe(res=>{
    array = res
      this.personajes = array.results
      console.log(this.personajes)
    })
    
  }
}
