import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptionistMainComponent } from './receptionist-main.component';

describe('ReceptionistMainComponent', () => {
  let component: ReceptionistMainComponent;
  let fixture: ComponentFixture<ReceptionistMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceptionistMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceptionistMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
