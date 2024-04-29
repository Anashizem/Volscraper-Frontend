import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardMostCountrySearchedComponent } from './dashboard-most-country-searched.component';

describe('DashboardMostCountrySearchedComponent', () => {
  let component: DashboardMostCountrySearchedComponent;
  let fixture: ComponentFixture<DashboardMostCountrySearchedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardMostCountrySearchedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardMostCountrySearchedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
