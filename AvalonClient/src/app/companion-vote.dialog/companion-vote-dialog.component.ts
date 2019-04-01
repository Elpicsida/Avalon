import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

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
