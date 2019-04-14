import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FitappService } from '../services/fitapp.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private stats;

  constructor(private fitservice : FitappService) {   
    
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
      console.log(this.stats);
  
      var count = 0;
      this.stats.forEach(function (element) {
        count += element['distance'];
      });

      var kmWalked = document.createElement("span");
      kmWalked.innerHTML = `You ran ${Math.round(count/1000)} km total in the last month!`;

      var timesRunned = document.createElement("span");
      timesRunned.innerHTML = `You did ${this.stats.length} activities in the last month!`;

      document.getElementById("data").appendChild(kmWalked);
      document.getElementById("times").appendChild(timesRunned);
      

    }, err => console.log(err));

    


  }

  loadData() {
    this.fitservice.getActivities().subscribe(data => {
      this.stats = data;
      console.log('Done loading!');
    }, err => console.log(err));//var data = this.fitservice.getStats().subscribe(data => console.log(data));
    //console.log(data);
  }

}
