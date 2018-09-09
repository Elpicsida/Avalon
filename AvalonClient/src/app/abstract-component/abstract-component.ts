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
import { MatSnackBar, MatDialog } from '@angular/material';

export class AbstractComponent implements OnInit, OnDestroy {

  protected subscription: ISubscription;
  constructor(protected chat: ChatService, protected router: Router, protected snackBar: MatSnackBar, public dialog: MatDialog) { }


  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
