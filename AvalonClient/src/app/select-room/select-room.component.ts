import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ChatService } from '../chat.service';
import { Subject } from 'rxjs';
import { ISubscription } from 'rxjs/Subscription';
import { AbstractComponent } from '../abstract-component/abstract-component';
import { MatSnackBar, MatDialog } from '@angular/material';

@Component({
  selector: 'app-select-room',
  templateUrl: './select-room.component.html',
  styleUrls: ['./select-room.component.css']
})
export class SelectRoomComponent extends AbstractComponent {

  availableRooms: string[] = [];

  constructor(protected chat: ChatService, protected router: Router, protected snackBar: MatSnackBar, public dialog: MatDialog) { 
    super(chat, router, snackBar, dialog);

  }

  ngOnInit() {
    this.subscription = this.chat.messages.subscribe(msg => {
      console.log('SelectRoomComponent: ' + msg);
      this.availableRooms = msg.map(x => x.substring('ROOM_'.length)),
      (error) => console.log(error);
    });
    this.chat.sendRequestForRooms();
  }

  createRoom() {
    this.router.navigate(['createRoom']);
  }

  goBack() {
    this.router.navigate(['']);
  }

  joinRoom(roomName) {
    console.log(roomName);
    this.chat.joinRoom(roomName);
    this.router.navigate(['waitingRoom']);
  }
}
