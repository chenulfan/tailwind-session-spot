import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShapesComponent } from 'src/components/shapes/shapes.component';
import { HeaderComponent } from 'src/components/shared/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ShapesComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
