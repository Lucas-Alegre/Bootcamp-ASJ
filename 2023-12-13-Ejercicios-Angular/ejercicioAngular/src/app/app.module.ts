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

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AsideComponent,
    MainComponent,
    FooterComponent,
    FormularioComponent,
    CardComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
