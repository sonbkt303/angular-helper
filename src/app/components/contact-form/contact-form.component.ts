import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { ValidationService } from '../../services/validation.service';
@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  contactForm: any;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, ValidationService.emailValidator]],
      subject: ['', Validators.required],
      profile: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  ngOnInit() {}

  saveUser() {
    // console.log('123');

    // console.log(this.contactForm.value);
  }

}
