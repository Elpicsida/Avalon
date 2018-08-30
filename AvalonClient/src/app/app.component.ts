import { Component, OnInit } from '@angular/core';
import { ChatService } from './chat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor(private chat: ChatService, private router: Router) { }

  ngOnInit() {
  }

  sendMessage() {
  }

  getUserName() {
    return this.chat.getUserName();
  }

  isUserNameChosen() {
    let userName = this.chat.getUserName();
    return !!userName;
  }
}
