import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptionistFooterComponent } from './receptionist-footer.component';

describe('ReceptionistFooterComponent', () => {
  let component: ReceptionistFooterComponent;
  let fixture: ComponentFixture<ReceptionistFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceptionistFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceptionistFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
