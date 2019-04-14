import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FitappService } from '../../services/fitapp/fitapp.service';
import { BlockchainService } from '../../services/blockchain/blockchain.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private stats;
  private signEvents;
  private dataViewEvents;

  constructor(private fitservice : FitappService, private blockchainService: BlockchainService) {   
    
  }

  
  ngOnInit() {

    this.fitservice.getActivities().subscribe(data => {
      this.stats = data;
      console.log('Done loading!');

      localStorage.clear;
      localStorage.setItem('Title', 'My dashboard');
      localStorage.setItem('Context', 'Hi Diego! Your run today made your work tomorrow so much better!');
      
      var array1 = ['FitBit', 'BasicFit', 'HealthApp'];
  
      this.loadData();
      this.loadSignEvents();
      this.loadDataViewEvents();
      console.log(this.stats);
  
      var count = 0;
      this.stats.forEach(function (element) {
        count += element['distance'];
      });

      var div = document.createElement("DIV");
      div.setAttribute('class', 'item');
      div.innerHTML = count/1000 + ' km runned total';

      document.getElementById("data").appendChild(div);
      

    }, err => console.log(err));

    


  }

  loadData() {
    this.fitservice.getActivities().subscribe(data => {
      this.stats = data;
      console.log('Done loading!');
    }, err => console.log(err));
  }

  loadSignEvents() {
    this.blockchainService.getSignEvents().subscribe(data => {
      this.signEvents = data;
      console.log(this.signEvents)
    }, err => console.log(err));
  }

  loadDataViewEvents() {
    this.blockchainService.getDataViewEvents().subscribe(data => {
      this.dataViewEvents = data;
      console.log(this.dataViewEvents);
    }, err => console.log(err));
  }
}
