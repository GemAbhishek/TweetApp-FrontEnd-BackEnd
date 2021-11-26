import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { PostTweetComponent } from './tweet/post-tweet/post-tweet.component';
import { ViewAllTweetComponent } from './tweet/view-all-tweet/view-all-tweet.component';
import { ViewTweetComponent } from './tweet/view-tweet/view-tweet.component';
import { AllUserComponent } from './user/all-user/all-user.component';
import { ForgetPasswordComponent } from './user/forget-password/forget-password.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { SearchUserComponent } from './user/search-user/search-user.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: 'user',
    component: UserComponent,
  },
  {
    path: 'searchuser',
    component: SearchUserComponent,
  },
  {
    path: 'alluser',
    component: AllUserComponent,
  },
  {
    path: 'view-tweet',
    component: ViewTweetComponent,
  },
  {
    path: 'view-all-tweet',
    component: ViewAllTweetComponent,
  },
  {
    path: 'post-tweet',
    component: PostTweetComponent,
  },
  //edit dialog
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'forgetpassword',
    component: ForgetPasswordComponent,
  },
  {
    path: '**',
    component: HomePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
