import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insight',
  templateUrl: './insight.component.html',
  styleUrls: ['./insight.component.css']
})
export class InsightComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    localStorage.clear;
    localStorage.setItem('Title', 'Insights');
  }

}
