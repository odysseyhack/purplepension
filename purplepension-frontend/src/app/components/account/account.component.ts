import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    localStorage.clear;
    localStorage.setItem('Title', 'My account');
    localStorage.setItem('Context', 'Not everyone should have access to your private data. Tell me what i must keep private!');
  }

}
