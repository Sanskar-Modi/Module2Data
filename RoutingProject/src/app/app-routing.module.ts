import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddDetailsComponent } from './add-details/add-details.component'
import { FetchDetailsComponent } from './fetch-details/fetch-details.component'
import { OnlineLinkComponent } from './online-link/online-link.component';
import { UpdateDetailsComponent } from './update-details/update-details.component';

const routes: Routes = [
  {
    path:"add-details",
    component:AddDetailsComponent
  },
  {
    path:"fetch-details",
    component:FetchDetailsComponent
  },
  {
    path:"online-fetch-details",
    component:OnlineLinkComponent
  },
  {
    path:"update-details",
    component:UpdateDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
