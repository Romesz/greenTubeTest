import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent {

  private authForm : FormGroup;
  private success:boolean;

  constructor(fb: FormBuilder) {
    this.success = false;

    this.authForm = fb.group({
      'email' : [null, Validators.required],
      'pass': [null,  Validators.required]
    });
  }

  auth(value: any) {
    this.success = true;
    console.log(value);
    // TODO: process the data
  }

  emailError() {
    let email = this.authForm.controls['email'];
    if ((!email.valid ||email.hasError('required')) && email.touched) {
      return true;
    } else {
      return false;
    }
  }

}
