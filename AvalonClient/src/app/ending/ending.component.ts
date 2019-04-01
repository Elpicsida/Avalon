import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ChatService } from '../chat.service';
import { AbstractComponent } from '../abstract-component/abstract-component';
import { MatSnackBar, MatDialog } from '@angular/material';

@Component({
  selector: 'ending',
  templateUrl: './ending.component.html',
  styleUrls: ['./ending.component.css']
})
export class EndingComponent extends AbstractComponent {

  displayedColumns: string[] = ['id', 'name', 'characterName'];

  winningTeam: string;
  players: any[];
  userName: string;

  constructor(protected chat: ChatService, protected router: Router, protected snackBar: MatSnackBar, public dialog: MatDialog) {
    super(chat, router, snackBar, dialog);
   }
  
  ngOnInit() {
    this.subscription = this.chat.messages.subscribe(msg => {
      if (msg.type === 'getDataForEnding') {
        this.winningTeam = msg.team;
        this.players = msg.players;
      }
    });
    this.chat.getDataForEnding();
  }

  goToRoomSelection() {
    this.router.navigate(['selectRoom']);
  }
}
