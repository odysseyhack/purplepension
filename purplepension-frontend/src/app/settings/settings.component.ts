import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    localStorage.clear;
    localStorage.setItem('Title', 'Settings');
    localStorage.setItem('Context', 'Not everyone should have access to your private data. Tell me what i must keep private!');
  }

}
