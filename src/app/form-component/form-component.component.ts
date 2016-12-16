import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent {

  public authForm: FormGroup;
  public success: boolean;

  constructor(fb: FormBuilder) {
    this.success = false;

    this.authForm = fb.group({
      'email' : [null, Validators.required],
      'pass': [null,  Validators.required]
    });
  }

  processLogin(value: any) {
    this.success = true;
    console.log(value);
    // TODO: process the data
  }

  isEmailValid() {
    let email = this.authForm.controls['email'];
    if ((!email.valid || email.hasError('required')) && email.touched) {
      return true;
    } else {
      return false;
    }
  }

}
