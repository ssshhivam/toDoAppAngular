import { Component, NgZoneOptions, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  username=''
  password=''
  errorMessage='invalidCredentials'
  invalidLogin=false

  handleLogin() {
    if(this.hardCodedAuthenticationService.authenticate(this.username,this.password))
    {
      this.router.navigate(['welcome',this.username])
      this.invalidLogin=false
      console.log('user logged in successfully')
      
    }
    else
    {
      this.invalidLogin=true
      
    }
    }
ngOnInit(): void {
  throw new Error('Method not implemented.');
}
constructor(private router:Router,private hardCodedAuthenticationService:HardcodedAuthenticationService){}

}
