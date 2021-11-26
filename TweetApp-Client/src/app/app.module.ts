import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TweetComponent } from './tweet/tweet.component';
import { UserComponent } from './user/user.component';
import { EditTweetComponent } from './tweet/edit-tweet/edit-tweet.component';
import { PostTweetComponent } from './tweet/post-tweet/post-tweet.component';
import { ReplyTweetComponent } from './tweet/reply-tweet/reply-tweet.component';
import { ViewTweetComponent } from './tweet/view-tweet/view-tweet.component';
import { ViewAllTweetComponent } from './tweet/view-all-tweet/view-all-tweet.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { ForgetPasswordComponent } from './user/forget-password/forget-password.component';
import { SearchUserComponent } from './user/search-user/search-user.component';
import { AllUserComponent } from './user/all-user/all-user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { TimeAgoPipe } from './time-ago.pipe';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    TweetComponent,
    UserComponent,
    EditTweetComponent,
    PostTweetComponent,
    ReplyTweetComponent,
    ViewTweetComponent,
    ViewAllTweetComponent,
    LoginComponent,
    RegisterComponent,
    ForgetPasswordComponent,
    SearchUserComponent,
    AllUserComponent,
    TimeAgoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    MatProgressBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatFormFieldModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
