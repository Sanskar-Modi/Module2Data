import { Component, OnInit } from '@angular/core';
import { OnlineFetchingService } from '../online-fetching.service';
import { OnlineData } from '../models/onlineData';

@Component({
  selector: 'app-online-link',
  templateUrl: './online-link.component.html',
  styleUrls: ['./online-link.component.css']
})
export class OnlineLinkComponent implements OnInit {

  service:OnlineFetchingService

  constructor(service:OnlineFetchingService) {

    this.service = service;

   }

   onlineData:OnlineData[] = [];

  ngOnInit() {
    this.service.fetchData()

    this.onlineData = this.service.getData();
  }

}
