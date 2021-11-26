import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.scss']
})
export class TweetComponent implements OnInit {

  va=false;

  constructor() { }

  ngOnInit(): void {
  }

}
