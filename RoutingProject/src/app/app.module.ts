import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MyServiceService } from './my-service.service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddDetailsComponent } from './add-details/add-details.component';
import { FetchDetailsComponent } from './fetch-details/fetch-details.component';
import { HttpClient,HttpClientModule} from '@angular/common/http';
import { OnlineLinkComponent } from './online-link/online-link.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateDetailsComponent } from './update-details/update-details.component';


@NgModule({
  declarations: [
    AppComponent,
    AddDetailsComponent,
    FetchDetailsComponent,
    OnlineLinkComponent,
    UpdateDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    MyServiceService,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
