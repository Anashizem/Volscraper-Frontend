import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOriginCountryPercentagesComponent } from './user-origin-country-percentages.component';

describe('UserOriginCountryPercentagesComponent', () => {
  let component: UserOriginCountryPercentagesComponent;
  let fixture: ComponentFixture<UserOriginCountryPercentagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserOriginCountryPercentagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserOriginCountryPercentagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
