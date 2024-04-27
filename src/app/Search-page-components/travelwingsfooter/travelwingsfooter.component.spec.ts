import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelwingsfooterComponent } from './travelwingsfooter.component';

describe('TravelwingsfooterComponent', () => {
  let component: TravelwingsfooterComponent;
  let fixture: ComponentFixture<TravelwingsfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TravelwingsfooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TravelwingsfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
