import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNaviationComponent } from './home-naviation.component';

describe('HomeNaviationComponent', () => {
  let component: HomeNaviationComponent;
  let fixture: ComponentFixture<HomeNaviationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeNaviationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeNaviationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
