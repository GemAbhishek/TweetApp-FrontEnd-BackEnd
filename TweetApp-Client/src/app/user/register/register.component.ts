import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  minDate = new Date(1900, 1, 1);
  maxDate = new Date();
  displayError = false;
  displayLoading = false;
  
  registerForm = this._lf.group({
    email: [''],
    firstName: [''],
    lastName: [''],
    gender: [''],
    dob: [''],
    mobilePhone:[''],
    password: [''],
    rePassword:[''],
  });

  constructor(
    private _lf: FormBuilder,
    private _backend: UserService,
    private _router: Router
  ) {}

  public isvalidPhone(n : string) {
    if(n.length ==10 ){
      return /^-?[\d.]+(?:e-?\d+)?$/.test(n);
    }
    return false;
  }

  submit() {
    this.displayLoading = true;

    if(this.isvalidPhone(this.registerForm.value.mobilePhone)){
      if(this.registerForm.value.password == this.registerForm.value.rePassword){
        this._backend
        .register
          (
          this.registerForm.value.email,
          this.registerForm.value.firstName,
          this.registerForm.value.lastName,
          this.registerForm.value.gender,
          this.registerForm.value.dob,
          this.registerForm.value.mobilePhone,
          this.registerForm.value.password,
          ).subscribe(
          (result) => {
            this._router.navigateByUrl('login');
            this.displayLoading = false;
            alert('Registration Successfull');
          },
          (err) => {
            this.displayError = true;
            this.displayLoading = false;
            alert(err.error.error.description);
          }
        );
      }
      else{
        alert('Confirm Password must match');
        this.displayLoading = false;
      }
    }
    else{
      alert('Enter valid Phone Number (10 digit)');
      this.displayLoading = false;
    }
  }

  ngOnInit(): void {

    if (localStorage.getItem('JwtToken') != null) {
      this._router.navigateByUrl('home');
    }
    
    this.registerForm.valueChanges.subscribe((value) => {
      this.displayError = false;
    });
  }
}
