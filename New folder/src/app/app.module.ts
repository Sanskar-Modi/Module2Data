import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewcompComponent } from './newcomp/newcomp.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Serv1Service } from './serv1.service';
import { DircolDirective } from './dircol.directive';

@NgModule({
  declarations: [
    AppComponent,
    NewcompComponent,
    DircolDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule
  ],
  providers: [HttpClient,Serv1Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
