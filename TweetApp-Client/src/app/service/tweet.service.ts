import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TweetService {

  constructor(private _http: HttpClient) { }

  PostTweet(message: string, tag: string):Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('JwtToken') || 'error' });
    let options = { headers: headers }; 
    const body = { message: message, tag: tag };
    return this._http.post('https://localhost:5001/api/v1/tweets/add',body, options);
  }

  updateTweet(tweetId: string, message: string, tag: string):Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('JwtToken') || 'error' });
    let options = { headers: headers }; 
    const body = { tweetId:tweetId, message: message, tag: tag };
    return this._http.put('https://localhost:5001/api/v1/tweets/update',body, options);
  }

  tweetReply(tId: string, msg: string):Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('JwtToken') || 'error' });
    let options = { headers: headers }; 
    const body = { tweetId: tId, replymsg: msg };
    return this._http.post('https://localhost:5001/api/v1/tweets/reply',body, options);
  }

  tweetLike(tId: string, like: boolean):Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('JwtToken') || 'error' });
    let options = { headers: headers };
    const body = { tweetId: tId, isLike: like };
    return this._http.post('https://localhost:5001/api/v1/tweets/like', body, options);
  }

  tweetDelete(tId:string):Observable<any>{
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('JwtToken') || 'error' });
    let options = { headers: headers};
    return this._http.delete('https://localhost:5001/api/v1/tweets/delete/'+tId, options);
  }

  allTweets():Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('JwtToken') || 'error' });
    let options = { headers: headers }; 
    return this._http.get(
      'https://localhost:5001/api/v1/tweets/all', options);
  }

  MyTweets():Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('JwtToken') || 'error' });
    let options = { headers: headers }; 
    return this._http.get(
      'https://localhost:5001/api/v1/tweets', options);
  }

  loadReply(tweetId: String){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('JwtToken') || 'error' });
    let queries = new HttpParams().set('tweetId', tweetId.toString())
    let options = { headers: headers , params: queries}; 
    return this._http.get('https://localhost:5001/api/v1/tweetboard', options);
  }

}
