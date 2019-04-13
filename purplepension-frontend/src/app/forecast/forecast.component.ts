import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    localStorage.clear;
    localStorage.setItem('Title', 'Forecast');
    localStorage.setItem('Context', 'You are doing FANTASTIC! If you keep on running like this, you will save an extra 350 euros by the end of this year!');
  }

}
