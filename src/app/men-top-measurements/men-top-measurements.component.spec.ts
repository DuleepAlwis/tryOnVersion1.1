import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenMeasurementsComponent } from './men-top-measurements.component';

describe('MenMeasurementsComponent', () => {
  let component: MenMeasurementsComponent;
  let fixture: ComponentFixture<MenMeasurementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenMeasurementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenMeasurementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
