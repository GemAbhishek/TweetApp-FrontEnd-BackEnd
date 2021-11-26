import { Component, OnInit } from '@angular/core';
import { TweetService } from 'src/app/service/tweet.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-view-all-tweet',
  templateUrl: './view-all-tweet.component.html',
  styleUrls: ['./view-all-tweet.component.scss']
})
export class ViewAllTweetComponent implements OnInit {

  public tweets : any[]=[];
  public replies : any[]=[];
  displayLoading = false;
  fetchDone = false;
  tweetService: TweetService;
  userservice:UserService;

  constructor(public _tweetService: TweetService, public _userservice: UserService) 
  {
    this.tweetService =_tweetService;
    this.userservice=_userservice;
  }

   tweetLike(tid:string, isLike: boolean, i: number){
    this._tweetService.tweetLike(tid, isLike).subscribe(      
      (result:any) => {
        this.tweets[i].likedByLoggedUser = isLike;
      },
      (err: any) => {
        alert(err.error.error.description);
      }
    )
   }

   reloadTweet(){
    if (localStorage.getItem('JwtToken') != null) {
      this.tweetService.allTweets().subscribe(
        (result) =>{
          this.tweets = result;
          this._userservice.updateIsReloadTweet(false);
        },
        (error)=>{
          alert('Error while loading!! Please Check Network');
        }
      )
    }
   }

   openReply(i : number){

    var isOn = this.tweets[i].uiRDisplay;
    this.replies = [];

    this.tweets.forEach((element: { uiRDisplay: boolean; }) => {
      element.uiRDisplay = false;
    });

    this.tweets[i].uiRDisplay=!isOn;
    
    if(this.tweets[i].uiRDisplay){
      this._tweetService
      .loadReply(this.tweets[i].id).subscribe(
        (result:any) => {
          this.replies = result.replyTweets;
        },
        (err: any) => {
          alert(err.error.error.description);
        }
      );
    }
   }

   replyMsg(replymsg : any, tId: string){
    this.displayLoading = true;

    this._tweetService
    .tweetReply(tId, replymsg).subscribe(
      (result:any) => {
        //alert('tweet replied');
        this._tweetService
          .loadReply(tId).subscribe(
          (result:any) => {
            this.replies = result.replyTweets;
            this.displayLoading = false;
          },
          (err: any) => {
            this.displayLoading = false;
            alert(err.error.error.description);
          }
       );
      },
      (err: any) => {
        this.displayLoading = false;
        alert(err.error.error.description);
      }
    );
   }
   

  ngOnInit(): void {

    if (localStorage.getItem('JwtToken') != null) {
      this.tweetService.allTweets().subscribe(
        (result) =>{
          this.tweets = result;
          this.fetchDone = true;
        },
        (error)=>{
          alert('Error while loading!! Please Check Network');
        }
      )
    }
    
  }

}
