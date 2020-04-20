import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LawsuitsComponent } from './lawsuits.component';

describe('LawsuitsComponent', () => {
  let component: LawsuitsComponent;
  let fixture: ComponentFixture<LawsuitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LawsuitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LawsuitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
