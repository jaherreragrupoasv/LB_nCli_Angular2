import {Component, ViewEncapsulation} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';

import {User, AccessToken}  from '../../shared/sdk/models';
import {UserApi}            from '../../shared/sdk/services';
import {Router} from '@angular/router';

@Component({
  selector: 'login',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./login.scss')],
  template: require('./login.html'),
})
export class Login {

  public form: FormGroup;
  public email: AbstractControl;
  public password: AbstractControl;
  public submitted: boolean = false;

  private user: User = new User();

  constructor(fb: FormBuilder, private userApi: UserApi, private router: Router) {
    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });

    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
  }

  // getLista() {
  //   this.userApi.find().subscribe(res => {
  //     this.todoList = res as User[];
  //   }, err => {
  //     console.log(err);
  //   });
  // }


  login(user: Object) {

    debugger;
    this.userApi.login(user).subscribe(
      (token: AccessToken) => this.router.navigate(['/home']),
      err => alert(err.message)
    );
  }


  public onSubmit(values: Object): void {
    this.submitted = true;
    if (this.form.valid) {

      this.login(values);

      // your code goes here
      // console.log(values);
    }
  }
}
