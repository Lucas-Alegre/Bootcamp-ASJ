import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PipeNumerosPrimosPipe } from './pipes/pipe-numeros-primos.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PipeNumerosPrimosPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
