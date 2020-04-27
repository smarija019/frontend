import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyDialogboxComponent } from './company-dialogbox.component';

describe('CompanyDialogboxComponent', () => {
  let component: CompanyDialogboxComponent;
  let fixture: ComponentFixture<CompanyDialogboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyDialogboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyDialogboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
