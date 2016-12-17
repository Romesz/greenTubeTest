/* tslint:disable:no-unused-variable */

interface UsersCred {
    'email': string;
    'pass': string;
}

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { FormComponentComponent } from './form-component.component';

describe('FormComponentComponent', () => {
  let component: FormComponentComponent;
  let fixture: ComponentFixture<FormComponentComponent>;
  let mockUserCred: UsersCred;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FormComponentComponent
      ],
      imports: [
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    mockUserCred = {
      email: `firtermaiszter.romano@gmail.com`,
      pass: `dummyPass`
    };
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test login function success', () => {
    component.processLogin(mockUserCred);
    expect(component.success).toBeTruthy();
  });

  it('test login function user data', () => {
    expect(mockUserCred.email).toEqual(`firtermaiszter.romano@gmail.com`);
    expect(mockUserCred.pass).toEqual(`dummyPass`);
    component.processLogin(mockUserCred);
    expect(component.success).toBeTruthy();
  });

  it('isEmailInValid test true branch', () => {
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    compiled.querySelector('#email').value = 'INCORRECT EMAIL PATTERN';
    component.authForm.controls['email']._touched = true;
    expect(component.isEmailInValid()).toBeTruthy();
  });

  it('isEmailInValid test false branch', () => {
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    compiled.querySelector('#email').value = mockUserCred.email;
    expect(component.isEmailInValid()).toBeFalsy();
  });
});
