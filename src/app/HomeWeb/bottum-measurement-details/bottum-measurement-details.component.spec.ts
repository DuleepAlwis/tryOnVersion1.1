import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottumMeasurementDetailsComponent } from './bottum-measurement-details.component';

describe('BottumMeasurementDetailsComponent', () => {
  let component: BottumMeasurementDetailsComponent;
  let fixture: ComponentFixture<BottumMeasurementDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottumMeasurementDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottumMeasurementDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
