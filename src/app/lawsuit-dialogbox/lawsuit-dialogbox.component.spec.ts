import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LawsuitDialogboxComponent } from './lawsuit-dialogbox.component';

describe('LawsuitDialogboxComponent', () => {
  let component: LawsuitDialogboxComponent;
  let fixture: ComponentFixture<LawsuitDialogboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LawsuitDialogboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LawsuitDialogboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
