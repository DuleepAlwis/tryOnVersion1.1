import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopMeasurementComponent } from './top-measurement.component';

describe('TopMeasurementComponent', () => {
  let component: TopMeasurementComponent;
  let fixture: ComponentFixture<TopMeasurementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopMeasurementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopMeasurementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
