import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ChatService } from '../chat.service';
import { Room } from '../Models/Room';
import { ISubscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs';
import { CharacterCard } from '../Models/CharacterCard';
import { Player } from '../Models/Player';
import { MatDialog, MatSnackBar } from '@angular/material';
import { MissionVoteDialog } from '../mission-vote-dialog/mission-vote-dialog.component';
import { Mission } from '../Models/Mission';
import { CompanionVoteDialog } from '../companion-vote.dialog/companion-vote-dialog.component';
import { AbstractComponent } from '../abstract-component/abstract-component';

@Component({
  selector: 'app-game-room',
  templateUrl: './game-room.component.html',
  styleUrls: ['./game-room.component.css']
})
export class GameRoomComponent extends AbstractComponent {

  displayedColumns: string[] = ['id', 'name', 'leader', 'onMission', 'vote', 'voteValue'];
  missionDisplayedColumns: string[] = ['id', 'numberOfCompanions', 'numberOfFailsToFailMission', 'missionSuccess'];
  characterCard: CharacterCard = new CharacterCard();
  missions: Mission[] = [];
  players: Player[] = [];
  mission: Mission;
  selectedPlayers = [];
  votingActive: boolean;
  afterSelectingCompanions: boolean;
  allPlayersVoted: boolean = false;
  gameLog = ' GAME LOGGER '; 
  currentMission: number;
  roomName: string;

  constructor(protected chat: ChatService, protected router: Router, protected snackBar: MatSnackBar, public dialog: MatDialog) { 
    super(chat, router, snackBar, dialog);
  }

  ngOnInit() {
    this.roomName = this.chat.getRoom();
    this.subscription = this.chat.messages.subscribe(msg => {
      if (msg.type === 'initGame') {
        this.players = [];
        this.currentMission = 0;
        this.mission = msg.mission;
        this.missions = msg.campaign.Missions;
        let players = msg.players;
        for (let i = 0 ; i < players.length; i++) {
          this.players.push(
            {
              Name: players[i].Name,
              IsGoingOnAMission: false,
              IsLeader: players[i].IsLeader,
              Ready : false,
              Room: '',
              hasVoted: false
            }
          );
        }
      } else if (msg.type === 'missionChanged') {
        const user = msg.userName;
        const isOnMission = msg.onMission;

        this.players.find(x => x.Name === user).IsGoingOnAMission = isOnMission;
        this.openSnackBar('Someone is going on a mission', 'OK');
      } else if (msg.type === 'startVoting') {
        this.openCompanionVoteDialog();
        this.afterSelectingCompanions = true;
      } else if (msg.type === 'voteForTeam') {
        const voteOwner = msg.voteOwner;
        const player = this.players.find(x => x.Name === voteOwner);
        player.hasVoted = true;
        player.voteValue = msg.voteValue;

        if (this.players.filter(x => x.hasVoted).length === this.players.length) {
          this.allPlayersVoted = true;
        }
      } else if (msg.type === 'voteMission') {
        this.openMissionVoteDialog();
      } else if (msg.type === 'resetMission') {
        this.gameLog = 'Team didn\'t have enough votes';
        this.players = [];
        this.selectedPlayers = [];
        this.mission = msg.mission;
        let players = msg.players;
        for (let i = 0 ; i < players.length; i++) {
          this.players.push(
            {
              Name: players[i].Name,
              IsGoingOnAMission: false,
              IsLeader: players[i].IsLeader,
              Ready : false,
              Room: '',
              hasVoted: false
            }
          );
        }
        this.afterSelectingCompanions = false;
        this.allPlayersVoted = false;
      } else if (msg.type === 'endGame') {
        if (msg.evilWin) {
          this.gameLog = 'EVIL WON';
        } else {
          this.gameLog = 'GOOD WON';
        }
      } else if (msg.type === 'missionVotesResult') {
        this.missions[this.currentMission].IsSuccess = msg.IsMissionASuccess;
        this.currentMission++;
        this.players = [];
        this.selectedPlayers = [];
        this.mission = msg.mission;
        let players = msg.players;
        for (let i = 0 ; i < players.length; i++) {
          this.players.push(
            {
              Name: players[i].Name,
              IsGoingOnAMission: false,
              IsLeader: players[i].IsLeader,
              Ready : false,
              Room: '',
              hasVoted: false
            }
          );
        }
        this.afterSelectingCompanions = false;
        this.allPlayersVoted = false;
      } else if (msg.type === 'sendingCharacterCard') {
        this.characterCard = msg.characterCard;
      } else {
        console.error('What kind of message is that ?');
        console.error(msg);
      }
    }), (error) => console.log('Error' + error);

    this.chat.initGame();
  }

  getImageUrl() {
    return 'http://localhost:5000' + this.characterCard.ImageUrl;
  }

  readyClicked($event, playerName: string): void {
    const isPlayerOnMission = $event.checked;
    let playerId = this.selectedPlayers.indexOf(playerName);
    if (playerId === -1 && isPlayerOnMission) {
      this.selectedPlayers.push(playerName);
    }

    if (playerId > -1  && !isPlayerOnMission) {
      this.selectedPlayers.splice(playerId, 1);
    }
    this.chat.onMissionApplyUpdate(playerName, isPlayerOnMission);
  }

  CheckboxEnabled(playerName: string): boolean {
    if (!this.afterSelectingCompanions) {
      if (this.players && this.players.length > 0) {
        const player = this.getPlayer();
        return player.IsLeader && (this.selectedPlayers.indexOf(playerName) > -1 || this.selectedPlayers.length < this.mission.NumberOfCompanions);
      }
    }
    
    return false;
  }

  IsVoteButtonActive() : boolean {
    if (!this.afterSelectingCompanions) {
      if (this.mission) {
        return this.selectedPlayers.length === this.mission.NumberOfCompanions;
      }
    }
    return false;
  }

  private getPlayer(): Player {
    const userName = this.chat.getUserName();
    return this.players.find(x => x.Name  === userName); 
  }

  confirmTeam(): void {
    let team = this.selectedPlayers;
    this.chat.startVoting(team);
  }

  openMissionVoteDialog(): void {
    const dialogRef = this.dialog.open(MissionVoteDialog, {
      width: '250px',
      data: {
        VoteFor : null,
        Character : this.characterCard
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result != null) {
        console.log('sending to service' + result);
        this.chat.voteForMission(result);
      }
    });
  }

  openCompanionVoteDialog(): void {
    const dialogRef = this.dialog.open(CompanionVoteDialog, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      if (result != null) {
        this.chat.voteForPlayer(result);
      }
    });
  }

  playerVoted() : boolean {
    if (this.afterSelectingCompanions) {
      if (this.players && this.players.length) {
        return this.players.find(x => x.Name === this.chat.getUserName()).hasVoted;
      }
    }

    return true;
  }
}
