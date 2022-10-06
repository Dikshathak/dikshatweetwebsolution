import { Component, OnInit } from '@angular/core';
import { Tweet } from '../Models/Tweet.Model';
import { User } from '../Models/User.Model';
import { TweetsService } from '../tweets.service';
import { TweetsComponent } from '../tweets/tweets.component';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private tweetsService :TweetsService,private tweetsComponent:TweetsComponent,private router: Router,private route:ActivatedRoute) { }
  isLoggedIn=sessionStorage.getItem("isLoggedIn");
  response=sessionStorage.getItem("email");

  loginForm=new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),    
    password:new FormControl('',[Validators.required])
  })
  get email()
  {
    return this.loginForm.get('email');
  }
  get password()
  {
    return this.loginForm.get('password');
  }

  ngOnInit(): void {  
    if(this.isLoggedIn=="True")
    {
      alert("You are already logged in");
      
      this.router.navigate(['/add-tweet/'+this.response]);
    }
  }
  res:string;
  users:User;
  statusCode:number;
  Login(user:User)
  {
    this.res=user.email;
    this.tweetsService.loginUser(user).subscribe(result=>{
      this.statusCode=200;
      // sessionStorage.setItem("response","");
      //this.res=result.toString();
      //sessionStorage.setItem("isLoggedIn","True");
    
      if(this.statusCode==200)
      {
        sessionStorage.setItem("isLoggedIn","True");
        sessionStorage.setItem("email",user.email);
        this.router.navigate(['/add-tweet/'+user.email]);        
      }      
         
    },error=>{
      console.log(error.status);
      this.statusCode=error.status;
    
      if(this.statusCode==404)
      {
        alert("Wrong Username or Password.");
        this.router.navigate(['/login']);       
      } 
    })  
  }
  createUser()
  {
    this.router.navigate(['/register']);
  }

}
