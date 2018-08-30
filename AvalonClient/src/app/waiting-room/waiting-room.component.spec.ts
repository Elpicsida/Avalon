import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitingRoomComponent } from './waiting-room.component';

describe('SelectRoomComponent', () => {
  let component: WaitingRoomComponent;
  let fixture: ComponentFixture<WaitingRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaitingRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaitingRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
