import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottumMeasurementComponent } from './bottum-measurement.component';

describe('BottumMeasurementComponent', () => {
  let component: BottumMeasurementComponent;
  let fixture: ComponentFixture<BottumMeasurementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottumMeasurementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottumMeasurementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
