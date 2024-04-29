import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormStateService {
  private isFormSubmitted: boolean = false;

  setFormSubmitted(value: boolean) {
    this.isFormSubmitted = value;
  }

  getFormSubmitted() {
    return this.isFormSubmitted;
  }
}
