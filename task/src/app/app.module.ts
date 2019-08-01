import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { HttpClient,HttpClientModule } from '@angular/common/http'
import { DataParseService } from './data-parse.service';

@NgModule({
  declarations: [
    AppComponent,
    FetchDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ DataParseService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
