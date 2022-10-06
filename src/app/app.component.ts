import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { AddTweetComponent } from './add-tweet/add-tweet.component';
import { LoginComponent } from './login/login.component';
import { Tweet } from './Models/Tweet.Model';
import { User } from './Models/User.Model';
import { RegisterComponent } from './register/register.component';
import { TweetsService } from './tweets.service';
import { TweetsComponent } from './tweets/tweets.component';
import { UsersComponent } from './users/users.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TweetApp';
  public tweets:Tweet[];
  bsModalRef: BsModalRef;
  

  constructor(private loginComponent:LoginComponent)
  {

  }
  
  ngOnInit(): void {    
    //sessionStorage.setItem("isLoggedIn","False");  
    
  }

  user:User;

  getTweets()
  {  
     this.loginComponent.Login(this.user);
  }


  // getUsers()
  // {
  //   this.bsModalRef = this.bsModalService.show(UsersComponent);
  // }

  // Login()
  // {
  //   this.bsModalRef = this.bsModalService.show(LoginComponent);
    
  // }
  // Register()
  // {
  //   this.bsModalRef=this.bsModalService.show(RegisterComponent); 
  // }

  // addTweet()
  // {
  //   this.bsModalRef = this.bsModalService.show(AddTweetComponent);
  //   // this.bsModalRef.content.event.subscribe(result => {
  //   //   if (result == 'OK') {
  //   //     this.getPosts();
  //   //   }
  //   // });
  // }
}
