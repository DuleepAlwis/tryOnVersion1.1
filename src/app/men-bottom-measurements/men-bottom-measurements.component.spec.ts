import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenBottomMeasurementsComponent } from './men-bottom-measurements.component';

describe('MenBottomMeasurementsComponent', () => {
  let component: MenBottomMeasurementsComponent;
  let fixture: ComponentFixture<MenBottomMeasurementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenBottomMeasurementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenBottomMeasurementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
