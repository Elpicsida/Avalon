import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ChatService } from '../chat.service';
import { Room } from '../Models/Room';
import { ISubscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs';
import { CharacterCard } from '../Models/CharacterCard';
import { CharactersDB } from '../const/CharactersDB';
import { MessageType } from '../Enums/MessageType';
import { Campaign } from '../Models/Campaign';
import { Mission } from '../Models/Mission';
import { AbstractComponent } from '../abstract-component/abstract-component';
import { MatSnackBar, MatDialog } from '@angular/material';
error
@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.css']
})
export class CreateRoomComponent extends AbstractComponent {

  displayedColumns: string[] = ['id', 'companions', 'failures'];
  specialCharacters: CharacterCard[] = [];
  room: Room = new Room();
  private numberOfPlayers: number;

  constructor(protected chat: ChatService, protected router: Router, protected snackBar: MatSnackBar, public dialog: MatDialog) { 
    super(chat, router, snackBar, dialog);
  }

  ngOnInit() {
    this.subscription = this.chat.messages.subscribe(msg => {
      if (msg) {
        if (msg.Type === MessageType.GET_SPECIAL_CHARACTERS) {
          this.specialCharacters = msg.data;
        } else if (msg.Type === MessageType.GET_DEFAULT_CAMPAIGN) {
        this.room.Campaign = msg.data;
        } else if (msg.Type === MessageType.CHECK_FOR_ROOM_NAME_UNIQUE) {
          if (msg.roomNameValid) {
            this.room.NumberOfPlayers = 1;
            this.chat.createNewRoom(this.room);
            this.router.navigate(['waitingRoom']);
          }
          else {
            this.openSnackBar('Room Name already taken','OK');
          }
        }
      }
    });

    this.chat.getSpecialCharacters();
  }

  createRoom() {
    this.chat.checkRoomName(this.room.name);
  }

  goBack() {
    this.router.navigate(['selectRoom']);
  }

  onNgModelChange($event) {
    console.log($event);
    this.setNumberOfPlayers();
  }

  setNumberOfPlayers(): void {
    this.numberOfPlayers = this.room.SpecialCharacters.length + this.room.NumberOfEvil + this.room.NumberOfGood;
    //if (this.numberOfPlayers > 4) {
      this.chat.getDefaultCampaign(this.numberOfPlayers);
    //}
  }

  decreaseCompanions(mission: Mission): void {
    if (mission.NumberOfCompanions > 1) {
      mission.NumberOfCompanions--;
    }
  }

  increaseCompanions(mission: Mission): void {
    if (mission.NumberOfCompanions < 5) {
      mission.NumberOfCompanions++;
    }
  }

  decreaseFailures(mission: Mission): void {
    if (mission.NumberOfFailsToFailMission > 1) {
      mission.NumberOfFailsToFailMission--;
    }
  }

  increaseFailures(mission: Mission): void {
    if (mission.NumberOfFailsToFailMission < 3) {
      mission.NumberOfFailsToFailMission++;
    }
  }
}
