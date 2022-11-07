import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDesComponent } from './app-des.component';

describe('AppDesComponent', () => {
  let component: AppDesComponent;
  let fixture: ComponentFixture<AppDesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppDesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppDesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
