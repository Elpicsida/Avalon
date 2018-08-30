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
}

@Component({
  selector: 'app-companion-vote-dialog',
  templateUrl: './companion-vote-dialog.component.html',
  styleUrls: ['./companion-vote-dialog.component.css']
})
export class CompanionVoteDialog  {
  selectedOption : string;
  options: string[] = ['Agree', 'Reject'];
  constructor(
    public dialogRef: MatDialogRef<CompanionVoteDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    if (this.selectedOption) {
      this.data.VoteFor = this.selectedOption === 'Agree'; 
    }
    this.dialogRef.close(this.data.VoteFor);
  }
}
