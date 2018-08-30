import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ChatService } from '../chat.service';
import { Room } from '../Models/Room';
import { ISubscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs';
import { Player } from '../Models/Player';
import { MessageType } from '../Enums/MessageType';
import { MatSnackBar, MatDialog } from '@angular/material';
import { AbstractComponent } from '../abstract-component/abstract-component';

@Component({
  selector: 'app-waiting-room',
  templateUrl: './waiting-room.component.html',
  styleUrls: ['./waiting-room.component.css']
})
export class WaitingRoomComponent extends AbstractComponent {

  ready: boolean = false;
  maxLimit: number = -1;
  availablePlayers: number = 0;
  players: Player[] = [];
  displayedColumns: string[] = ['id', 'name', 'ready'];
  roomName: string;

  constructor(protected chat: ChatService, protected router: Router, protected snackBar: MatSnackBar, public dialog: MatDialog) { 
    super(chat, router, snackBar, dialog);
  }
  
  ngOnInit() {
    this.roomName = this.chat.getRoom();
    this.subscription = this.chat.messages.subscribe(msg => {
      if (msg === MessageType.GAME_START) {
        this.startGame();
      } else {
        this.players = [];
        this.maxLimit = msg.maxLimit;
        this.availablePlayers = msg.availablePlayers;
        const characters = msg.players;
        for (let i = 0 ; i < characters.length; i++) {
          this.players.push(new Player(characters[i].Name, characters[i].Ready));
        }

        //this.openSnackBar('New User connected', 'OK');
      }
    }), (error) => console.log('Error' + error);

    this.chat.sendRequestForPlayersInRooms();
    console.log(this.chat);
  }

  readyClicked($event): void {
    this.ready = $event.checked;
    console.log('ready Clicked !' + this.ready);
    this.chat.sendPlayerUpdate(this.ready);
  }

  requestStartGame() {
    this.chat.startGame();
  }

  startGame() {
    this.router.navigate(['gameRoom']);
  }

  goBack() {
    this.router.navigate(['selectRoom']);
  }

  isStartActive() {
    return this.players.filter(x => x.Ready).length === this.maxLimit;
  }
}
