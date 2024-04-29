import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbordUsersComponent } from './dashbord-users.component';

describe('DashbordUsersComponent', () => {
  let component: DashbordUsersComponent;
  let fixture: ComponentFixture<DashbordUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashbordUsersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashbordUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
