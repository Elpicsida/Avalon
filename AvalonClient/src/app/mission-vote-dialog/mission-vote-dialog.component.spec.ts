import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionVoteDialog } from './mission-vote-dialog.component';

describe('SelectRoomComponent', () => {
  let component: MissionVoteDialog;
  let fixture: ComponentFixture<MissionVoteDialog>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissionVoteDialog ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionVoteDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
