import { Component, OnInit, OnDestroy, Input, ChangeDetectorRef } from '@angular/core';
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

  constructor(protected chat: ChatService, 
    protected router: Router, 
    protected snackBar: MatSnackBar, 
    public dialog: MatDialog,
    private changeDetectorRef: ChangeDetectorRef) { 
    super(chat, router, snackBar, dialog);
  }
  
  ngOnInit() {
    this.roomName = this.chat.getRoom();
    this.subscription = this.chat.messages.subscribe(msg => {
      if (msg.type === MessageType.GAME_START) {
        this.startGame();
      } else if (msg.type === MessageType.PLAYER_UPDATE) {
        let player = this.players.find(x => x.Name === msg.updatedPlayer.Name);
        player.Ready = msg.updatedPlayer.Ready;
        let readiness = player.Ready ? ' is ready' : ' is not ready';
        this.openSnackBar('User ' + msg.updatedPlayer.Name + readiness, 'OK');
      } else if (msg.type === MessageType.PLAYERS_IN_ROOM) {
        this.players = [];
        this.maxLimit = msg.maxLimit;
        this.availablePlayers = msg.availablePlayers;
        const characters = msg.players;
        for (let i = 0 ; i < characters.length; i++) {
          this.players.push(new Player(characters[i].Name, characters[i].Ready));

        }
      } else if (msg.type === MessageType.PLAYER_JOINED) {
        this.players.push(new Player(msg.userName, false));
        let tempPlayers = this.players;
        this.players = [];
        for (let i = 0 ; i < tempPlayers.length; i++) {
          this.players.push(new Player(tempPlayers[i].Name, tempPlayers[i].Ready));
        }
        this.availablePlayers = this.players.length;
        this.openSnackBar('User ' + msg.userName + ' has joined', 'OK');
      } else if (msg.type === MessageType.LEAVE_ROOM) {
        const playerId = this.players.findIndex(x => x.Name === msg.userName);
        this.players.splice(playerId, 1);
        const tempPlayers = this.players;
        this.players = [];
        for (let i = 0 ; i < tempPlayers.length; i++) {
          this.players.push(new Player(tempPlayers[i].Name, tempPlayers[i].Ready));
        }
        this.availablePlayers = this.players.length;
        this.openSnackBar('User ' + msg.userName + ' has left', 'OK');
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
    this.chat.leaveRoom();
    this.router.navigate(['selectRoom']);
  }

  isStartActive() {
    return this.players.filter(x => x.Ready).length === this.maxLimit;
  }
}
