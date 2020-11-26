import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PersonajesComponent} from '../app/components/personajes/personajes.component'
import {CapitulosComponent} from '../app/components/capitulos/capitulos.component'

const routes: Routes = [
  {path: '',redirectTo:'/Personajes',pathMatch:'full'},
  {path: 'Personajes',component:PersonajesComponent },
  {path: 'Capitulos',component:CapitulosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
