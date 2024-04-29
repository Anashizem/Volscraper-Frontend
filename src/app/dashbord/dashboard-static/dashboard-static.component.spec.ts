import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardStaticComponent } from './dashboard-static.component';

describe('DashboardStaticComponent', () => {
  let component: DashboardStaticComponent;
  let fixture: ComponentFixture<DashboardStaticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardStaticComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardStaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
