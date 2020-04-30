import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LawyerDialogboxComponent } from './lawyer-dialogbox.component';

describe('LawyerDialogboxComponent', () => {
  let component: LawyerDialogboxComponent;
  let fixture: ComponentFixture<LawyerDialogboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LawyerDialogboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LawyerDialogboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
