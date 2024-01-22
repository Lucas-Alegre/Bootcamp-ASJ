import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './componentes/card/card.component';
import { ContentComponent } from './componentes/content/content.component';
import { HeaderComponent } from './componentes/header/header.component';
import { MainComponent } from './componentes/main/main.component';
import { SideBarComponent } from './componentes/side-bar/side-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ContentComponent,
    HeaderComponent,
    MainComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
