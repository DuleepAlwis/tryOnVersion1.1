import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopMeasurementDetailsComponent } from './top-measurement-details.component';

describe('TopMeasurementDetailsComponent', () => {
  let component: TopMeasurementDetailsComponent;
  let fixture: ComponentFixture<TopMeasurementDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopMeasurementDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopMeasurementDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
