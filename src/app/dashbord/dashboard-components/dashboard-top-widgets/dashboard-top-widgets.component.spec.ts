import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTopWidgetsComponent } from './dashboard-top-widgets.component';

describe('DashboardTopWidgetsComponent', () => {
  let component: DashboardTopWidgetsComponent;
  let fixture: ComponentFixture<DashboardTopWidgetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardTopWidgetsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardTopWidgetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
