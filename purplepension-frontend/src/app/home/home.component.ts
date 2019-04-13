import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  
  ngOnInit() {
    localStorage.clear;
    localStorage.setItem('Title', 'My dashboard');
    localStorage.setItem('Context', 'Hi Diego! Your run today just gave you 2 Euros extra to spend later! Keep up the good work!');
  }



}
