import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.scss']
})
export class AllUserComponent implements OnInit {

  public users : any[]=[];
  userservice: UserService;

  constructor(public _userservice: UserService) {
    this.userservice =_userservice;
   }

  ngOnInit(): void {
    this.userservice.allUser().subscribe(
      (result) =>{
        this.users = result;
      },
      (error)=>{
        alert('Error while loading!! Please Check Network');
      }
    )
  }

}
