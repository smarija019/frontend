import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationDialogboxComponent } from './location-dialogbox.component';

describe('LocationDialogboxComponent', () => {
  let component: LocationDialogboxComponent;
  let fixture: ComponentFixture<LocationDialogboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationDialogboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationDialogboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
