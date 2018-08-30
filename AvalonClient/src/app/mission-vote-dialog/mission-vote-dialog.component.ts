import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
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
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AlignmentType } from '../Enums/AlignmentType';

export interface DialogData {
  VoteFor? : boolean;
  Character: any
}
@Component({
  selector: 'app-mission-vote-dialog',
  templateUrl: './mission-vote-dialog.component.html',
  styleUrls: ['./mission-vote-dialog.component.css']
})
export class MissionVoteDialog  {
  selectedOption : string;
  options: string[] = ['Success'];

  constructor(
    public dialogRef: MatDialogRef<MissionVoteDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
      if (this.playerIsEvil()) {
        this.options.push('Failure');
      }
    }

    playerIsEvil(): boolean {
      return this.data.Character.Alignment === "Evil";
    }
  onNoClick(): void {
    if (this.selectedOption) {
      this.data.VoteFor = this.selectedOption === 'Success'; 
    }
    this.dialogRef.close(this.data.VoteFor);
  }
}
