import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  username : string = "";

  isViewAllTweet = true;
  isViewMyTweet = false;
  isViewAllUser = false;
  isSearchUser = false;

  constructor(
    private _lf: FormBuilder,
    private _backend: UserService,
    private _router: Router
  ) {}

  onIsviewALLTweet(){
    this.isViewAllTweet = true;
    this.isViewMyTweet = false;
    this.isViewAllUser = false;
    this.isSearchUser = false;
  }
  onIsviewMyTweet(){
    this.isViewAllTweet = false;
    this.isViewMyTweet = true;
    this.isViewAllUser = false;
    this.isSearchUser = false;
  }
  onIsviewALLuser(){
    this.isViewAllTweet = false;
    this.isViewMyTweet = false;
    this.isViewAllUser = true;
    this.isSearchUser = false;
  }
  onIsSearchUser(){
    this.isViewAllTweet = false;
    this.isViewMyTweet = false;
    this.isViewAllUser = false;
    this.isSearchUser = true;
  }
  
  ngOnInit(): void {
    if (localStorage.getItem('JwtToken') != null) {
      this._router.navigateByUrl('home');
    }
    else{
      this._router.navigateByUrl('login');
    }

    if( localStorage.getItem('name') != null) {
      this.username = localStorage.getItem('name') || 'error';
    }
  }
}
