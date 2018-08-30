import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanionVoteDialog } from './companion-vote-dialog.component';

describe('CompanionVoteDialog', () => {
  let component: CompanionVoteDialog;
  let fixture: ComponentFixture<CompanionVoteDialog>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanionVoteDialog ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanionVoteDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
