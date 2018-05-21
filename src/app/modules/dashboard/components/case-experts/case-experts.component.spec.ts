import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseExpertsComponent } from './case-experts.component';

describe('CaseExpertsComponent', () => {
  let component: CaseExpertsComponent;
  let fixture: ComponentFixture<CaseExpertsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseExpertsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseExpertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
