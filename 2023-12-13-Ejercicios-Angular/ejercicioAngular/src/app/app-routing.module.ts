import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimpsonMainComponent } from './componentes-Simpson/simpson-main/simpson-main.component';
import { SimpsongListadoComponent } from './componentes-Simpson/simpsong-listado/simpsong-listado.component';
import { SimpsongFormularioComponent } from './componentes-Simpson/simpsong-formulario/simpsong-formulario.component';
import { PersonajeMainComponent } from './componentes/18-12-componentes-personajes/personaje-main/personaje-main.component';
import { PersonajeTableComponent } from './componentes/18-12-componentes-personajes/personaje-table/personaje-table.component';
import { PersonajeCardComponent } from './componentes/18-12-componentes-personajes/personaje-card/personaje-card.component';



const routes: Routes = [
  { path: 'main', component: SimpsonMainComponent },
  { path: 'list', component: SimpsongListadoComponent },
  { path: 'form', component: SimpsongFormularioComponent },
  { path: 'personaje-main', component: PersonajeMainComponent },
  { path: 'personaje-table', component: PersonajeTableComponent },
  { path: 'personaje-card', component: PersonajeCardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
