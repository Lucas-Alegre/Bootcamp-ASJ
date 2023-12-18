import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { BrowserAnimationsModule } from  
    '@angular/platform-browser/animations'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './componentes/nav/nav.component';
import { AsideComponent } from './componentes/aside/aside.component';
import { MainComponent } from './componentes/main/main.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { CardComponent } from './componentes/card/card.component';
import { SimpsonMainComponent } from './componentes-Simpson/simpson-main/simpson-main.component';
import { SimpsongFormularioComponent } from './componentes-Simpson/simpsong-formulario/simpsong-formulario.component';
import { SimpsongListadoComponent } from './componentes-Simpson/simpsong-listado/simpsong-listado.component';
import { HomeComponent } from './home/home.component';
import { PersonajeMainComponent } from './componentes/18-12-componentes-personajes/personaje-main/personaje-main.component';
import { PersonajeTableComponent } from './componentes/18-12-componentes-personajes/personaje-table/personaje-table.component';
import { PersonajeCardComponent } from './componentes/18-12-componentes-personajes/personaje-card/personaje-card.component';
import { PersonajesService } from './service/personajes.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AsideComponent,
    MainComponent,
    FooterComponent,
    FormularioComponent,
    CardComponent,
    SimpsonMainComponent,
    SimpsongFormularioComponent,
    SimpsongListadoComponent,
    HomeComponent,
    PersonajeMainComponent,
    PersonajeTableComponent,
    PersonajeCardComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PersonajesService],
  bootstrap: [AppComponent]
})
export class AppModule { }