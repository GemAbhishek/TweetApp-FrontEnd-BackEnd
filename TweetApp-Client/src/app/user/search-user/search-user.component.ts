import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.scss']
})
export class SearchUserComponent implements OnInit {

  displayLoading = false;
  noUser = false;

  public users : any;

  constructor(public _userService: UserService) { }

  search(name: string){
    this.displayLoading = true;

    this._userService
      .searchUser(name).subscribe(
        (result:any) => {
          this.displayLoading = false;
          this.users = result;
        },
        (error: any) => {
          this.displayLoading = false;
          alert(error.error.error.description);
        }
      );
  }

  ngOnInit(): void {
  }

}
