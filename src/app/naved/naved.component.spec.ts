import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavedComponent } from './naved.component';

describe('NavedComponent', () => {
  let component: NavedComponent;
  let fixture: ComponentFixture<NavedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
