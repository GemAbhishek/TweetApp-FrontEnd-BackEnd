import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private _http: HttpClient) {}

  public IsLoggedIn = new BehaviorSubject<boolean>(localStorage.getItem('JwtToken') != null);
  isLoggedIn = this.IsLoggedIn.asObservable();

  updateIsLoggedIn(isLoggedInState : boolean){
    this.IsLoggedIn.next(isLoggedInState);
  }
  getIsLoggedIn(){
    return this.IsLoggedIn.value;
  }

  public IsReloadTweet = new BehaviorSubject<boolean>(false);
  isReloadTweet = this.IsReloadTweet.asObservable();

  updateIsReloadTweet(isReloadTweetstate : boolean){
    this.IsReloadTweet.next(isReloadTweetstate);
  }
  getIsReloadTweet(){
    return this.IsReloadTweet.value;
  }

  logout(){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('JwtToken') || 'error' });
    let options = { headers: headers };    
    return this._http.post('https://localhost:5001/api/v1/tweets/logout',null,options);
  }

  login(userId: string, password: string):Observable<any> {
    const body = { userId: userId, password: password };
    return this._http.post('https://localhost:5001/api/v1/tweets/login',body);
  }

  register(
    email: string,
    firstName: string,
    lastName: string,
    gender: string,
    dob: string,
    mobilePhone: string,
    password: string
    ):Observable<any> {
    
    const body = { email: email, firstName: firstName , lastName: lastName, gender: gender, dob: dob, mobilePhone: mobilePhone,password: password };
    return this._http.post('https://localhost:5001/api/v1/tweets/register',body);
  }

  forgotPassword(
    email: string,
    dob: string,
    mobilePhone: string,
    newPassword: string
    ):Observable<any> {
    
    const body = { email: email, dob: dob, mobilePhone: mobilePhone,newPassword: newPassword };
    return this._http.post('https://localhost:5001/api/v1/tweets/forgot',body);
  }

  allUser():Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('JwtToken') || 'error' });
    let options = { headers: headers }; 
    return this._http.get(
      'https://localhost:5001/api/v1/tweets/users/all', options);
  }

  searchUser(name:string):Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('JwtToken') || 'error' });
    let queries = new HttpParams().set('name', name)
    let options = { headers: headers , params: queries};
    return this._http.get(
      'https://localhost:5001/api/v1/tweets/search', options);
  }
}
