import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './componentes/card/card.component';
import { ContentComponent } from './componentes/content/content.component';
import { HeaderComponent } from './componentes/header/header.component';
import { MainComponent } from './componentes/main/main.component';
import { SideBarComponent } from './componentes/side-bar/side-bar.component';
import { TareasService } from './services/tareas.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AgregarTareasComponent } from './componentes/agregar-tareas/agregar-tareas.component';
import { EditarTareaComponent } from './componentes/editar-tarea/editar-tarea.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ContentComponent,
    HeaderComponent,
    MainComponent,
    SideBarComponent,
    AgregarTareasComponent,
    EditarTareaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [TareasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
