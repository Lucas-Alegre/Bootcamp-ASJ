import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarTareasComponent } from './componentes/agregar-tareas/agregar-tareas.component';
import { ContentComponent } from './componentes/content/content.component';
import { EditarTareaComponent } from './componentes/editar-tarea/editar-tarea.component';

const routes: Routes = [
  { path: '', redirectTo: 'listado', pathMatch: 'full' },
  { path: 'listado', component:  ContentComponent },
  { path: 'agregar-tareas', component: AgregarTareasComponent },
  { path: 'editar-tareas/:id', component:  EditarTareaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
