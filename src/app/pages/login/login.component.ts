import {Component, ViewEncapsulation} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'login',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./login.scss')],
  template: require('./login.html'),
  providers: [DataService]
})
export class Login {
  
  public form:FormGroup;
  public email:AbstractControl;
  public password:AbstractControl;
  public submitted:boolean = false;

  constructor(fb:FormBuilder,private dataService:DataService) {
    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });

    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
  }

  public onSubmit(values:Object):void {
    this.submitted = true;
    if (this.form.valid) {
      this.dataService.login(values)
      console.log(values);
    }
  }
}
