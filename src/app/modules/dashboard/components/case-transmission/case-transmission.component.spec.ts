import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseTransmissionComponent } from './case-transmission.component';

describe('CaseTransmissionComponent', () => {
  let component: CaseTransmissionComponent;
  let fixture: ComponentFixture<CaseTransmissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseTransmissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseTransmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
