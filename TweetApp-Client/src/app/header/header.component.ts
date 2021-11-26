import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public _userservice:UserService,private _router: Router) { }

  onLogout(){
    this._userservice.logout().subscribe(
      (result:any) => {
        this._router.navigateByUrl('login');
        localStorage.clear();
        this._userservice.updateIsLoggedIn(false);
      },
      (err: any) => {
        localStorage.clear();
        alert('Error Occured - please login and log out again!');
      }
    );
  }

  ngOnInit(): void {
  
  }
}
