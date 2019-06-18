import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerMeasurementComponent } from './customer-measurement.component';

describe('CustomerMeasurementComponent', () => {
  let component: CustomerMeasurementComponent;
  let fixture: ComponentFixture<CustomerMeasurementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerMeasurementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerMeasurementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
