import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalisationPopupComponent } from './personalisation-popup.component';

describe('PersonalisationPopupComponent', () => {
  let component: PersonalisationPopupComponent;
  let fixture: ComponentFixture<PersonalisationPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonalisationPopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonalisationPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
