import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptionistSidebarComponent } from './receptionist-sidebar.component';

describe('ReceptionistSidebarComponent', () => {
  let component: ReceptionistSidebarComponent;
  let fixture: ComponentFixture<ReceptionistSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceptionistSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceptionistSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
