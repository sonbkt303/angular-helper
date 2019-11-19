import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ValidationService } from '../../services/validation.service';

@Component({
  selector: 'app-controll-messages',
  template: `<div style="color: red" *ngIf="errorMessage !== null">{{errorMessage}}</div>`,
  // styleUrls: ['./controll-messages.component.scss']
})
export class ControllMessagesComponent {
  // errorMessage: strings;
  @Input() control: FormControl;

  constructor() { }

  get errorMessage() {
    console.log(this.control.errors);
    for (const propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
        return ValidationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
      }
    }
    return null;
  }

}
