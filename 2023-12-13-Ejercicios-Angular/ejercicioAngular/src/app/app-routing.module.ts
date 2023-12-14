import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimpsonMainComponent } from './componentes-Simpson/simpson-main/simpson-main.component';
import { SimpsongListadoComponent } from './componentes-Simpson/simpsong-listado/simpsong-listado.component';
import { SimpsongFormularioComponent } from './componentes-Simpson/simpsong-formulario/simpsong-formulario.component';



const routes: Routes = [
  { path: 'main', component: SimpsonMainComponent },
  { path: 'list', component: SimpsongListadoComponent },
  { path: 'form', component: SimpsongFormularioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
