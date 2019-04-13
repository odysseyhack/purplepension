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
    localStorage.setItem('Context', 'Hi Diego! Your run today made your work tomorrow so much better!');
    
    var array1 = ['FitBit', 'BasicFit', 'HealthApp'];

    array1.forEach(function (element) {
      var div = document.createElement("DIV");
      div.setAttribute('class', 'item');
      div.innerHTML = element;

      document.getElementById("detailItems").appendChild(div);
      console.log(element);
    });


  }



}
