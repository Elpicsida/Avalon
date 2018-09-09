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
  characterCard: CharacterCard;
}
@Component({
  selector: 'view-character-dialog',
  templateUrl: './view-character-dialog.component.html',
  styleUrls: ['./view-character-dialog.component.css']
})
export class ViewCharacterDialog  {
  
  private characterCard: CharacterCard; 
  
  constructor(
    public dialogRef: MatDialogRef<ViewCharacterDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
      this.characterCard = data.characterCard;
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  getImageUrl() {
    return 'http://localhost:5000' + this.characterCard.ImageUrl;
  }
}
