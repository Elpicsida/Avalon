import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCharacterDialog } from './view-character-dialog.component';

describe('ViewCharacterDialog', () => {
  let component: ViewCharacterDialog;
  let fixture: ComponentFixture<ViewCharacterDialog>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCharacterDialog ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCharacterDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
