import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactDialogboxComponent } from './contact-dialogbox.component';

describe('ContactDialogboxComponent', () => {
  let component: ContactDialogboxComponent;
  let fixture: ComponentFixture<ContactDialogboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactDialogboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactDialogboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
