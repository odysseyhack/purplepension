import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    localStorage.clear;
    localStorage.setItem('Title', 'Notifications');
    localStorage.setItem('Context', 'How do you want me to approach you?');
  }

}
