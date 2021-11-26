import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm = this._lf.group({
    userId: [''],
    password: [''],
  });

  displayError = false;
  displayLoading = false;
  userservice : UserService;

  constructor(
    private _lf: FormBuilder,
    public _userserivce: UserService,
    private _router: Router
  ) {
    this.userservice = _userserivce;
  }

  submit() {
    this.displayLoading = true;

    this._userserivce
      .login(this.loginForm.value.userId, this.loginForm.value.password).subscribe(
        (result:any) => {
          this._router.navigateByUrl('home');
          localStorage.setItem('JwtToken', result.jwtToken);
          localStorage.setItem('name', result.name);
          localStorage.setItem('userNameId', result.userNameId);
          localStorage.setItem('gender', result.gender);
          this.displayLoading = false;
          this._userserivce.updateIsLoggedIn(true);
        },
        (error: any) => {
          this.displayError = true;
          this.displayLoading = false;
          console.log(error.error.error.description);
          alert(error.error.error.description);
        }
      );
  }

  ngOnInit(): void {
    if (localStorage.getItem('JwtToken') != null) {
      this._router.navigateByUrl('home');
    }
    else{
      this.userservice.updateIsLoggedIn(false);
    }
    this.loginForm.valueChanges.subscribe((value) => {
      this.displayError = false;
    });
  }
}

