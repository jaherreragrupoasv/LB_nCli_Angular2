import {Component, ViewEncapsulation} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {EmailValidator, EqualPasswordsValidator} from '../../theme/validators';

import {User, AccessToken}  from '../../shared/sdk/models';
import {UserApi}            from '../../shared/sdk/services';
import {Router} from '@angular/router';

@Component({
  selector: 'register',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./register.scss')],
  template: require('./register.html'),
})
export class Register {

  public form:FormGroup;
  public name:AbstractControl;
  public email:AbstractControl;
  public password:AbstractControl;
  public repeatPassword:AbstractControl;
  public passwords:FormGroup;

  public submitted:boolean = false;

  private user: User = new User();

  constructor(fb:FormBuilder, private userApi: UserApi, private router: Router) {

    this.form = fb.group({
      'name': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'email': ['', Validators.compose([Validators.required, EmailValidator.validate])],
      'passwords': fb.group({
        'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
        'repeatPassword': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
      }, {validator: EqualPasswordsValidator.validate('password', 'repeatPassword')})
    });

    this.name = this.form.controls['name'];
    this.email = this.form.controls['email'];
    this.passwords = <FormGroup> this.form.controls['passwords'];
    this.password = this.passwords.controls['password'];
    this.repeatPassword = this.passwords.controls['repeatPassword'];
  }

  login(user: Object) {

    debugger;
    this.userApi.login(user).subscribe(
      (token: AccessToken) => this.router.navigate(['/home']),
      err => alert(err.message)
    );
  }

  register(user: Object) {

    delete user['name'];
    user["password"] = user.passwords.password;
    delete user['passwords'];

    debugger;

    this.userApi.create(user).subscribe(
      (user: User) => this.login(user),
      err => alert(err.message)
    );
  }

  public onSubmit(values : Object):void {
    this.submitted = true;
    if (this.form.valid) {

      this.register(values);
      // your code goes here
      // console.log(values);
    }
  }
}
