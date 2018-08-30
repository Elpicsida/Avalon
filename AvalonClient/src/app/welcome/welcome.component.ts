import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ChatService } from '../chat.service';
import { MessageType } from '../Enums/MessageType';
import { AbstractComponent } from '../abstract-component/abstract-component';
import { MatSnackBar, MatDialog } from '@angular/material';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent extends AbstractComponent {

  userName: string;
  constructor(protected chat: ChatService, protected router: Router, protected snackBar: MatSnackBar, public dialog: MatDialog) {
    super(chat, router, snackBar, dialog);
   }
  
  ngOnInit() {
    this.subscription = this.chat.messages.subscribe(msg => {
      if (msg.type === 'checkForNameUnique') {
        if (msg.value) {
          this.chat.setUserName(this.userName);
          this.router.navigate(['selectRoom']);
        }
        else {
          this.openSnackBar('Login already taken', 'OK');
        }
      }
    });
  }

  goToRoomSelection() {
    let isNameUnique = this.chat.checkUserName(this.userName);
  }
}
