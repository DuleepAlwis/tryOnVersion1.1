import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoriesProductsComponent } from './accessories-products.component';

describe('AccessoriesProductsComponent', () => {
  let component: AccessoriesProductsComponent;
  let fixture: ComponentFixture<AccessoriesProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessoriesProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessoriesProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
