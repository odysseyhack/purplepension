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
    this.stats = this.fitservice.getActivities().subscribe(data => console.log(data));//var data = this.fitservice.getStats().subscribe(data => console.log(data));
    //console.log(data);
    
  }

  
  ngOnInit() {
    localStorage.clear;
    localStorage.setItem('Title', 'My dashboard');
    localStorage.setItem('Context', 'Hi Diego! Your run today made your work tomorrow so much better!');
  }



}
