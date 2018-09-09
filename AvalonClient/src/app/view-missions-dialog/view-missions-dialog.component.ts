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
  missions: Mission[],
  currentMission: number
}
@Component({
  selector: 'view-missions-dialog',
  templateUrl: './view-missions-dialog.component.html',
  styleUrls: ['./view-missions-dialog.component.css']
})
export class ViewMissionsDialog  {

  missionDisplayedColumns: string[] = ['id', 'numberOfCompanions', 'numberOfFailsToFailMission', 'missionSuccess'];
  missions: Mission[];
  currentMission: number;

  constructor(
    public dialogRef: MatDialogRef<ViewMissionsDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
      this.missions = data.missions;
      this.currentMission = data.currentMission;
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
