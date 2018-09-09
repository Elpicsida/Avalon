import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMissionsDialog } from './view-missions-dialog.component';

describe('SelectRoomComponent', () => {
  let component: ViewMissionsDialog;
  let fixture: ComponentFixture<ViewMissionsDialog>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMissionsDialog ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMissionsDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
