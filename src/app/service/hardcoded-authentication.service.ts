import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  authenticate(username: string,password: string)
  {
       if(username==="shivam" && password==="Shivam@123")
       {
        sessionStorage.setItem('authenticatedUser',username)
        return true;
       }
       else{
        return false;
       }
  }
  isUserLoggedIn()
  {
    let user=sessionStorage.getItem('authenticatedUser')
    return !(user===null)
  }
  logout()
  {
    sessionStorage.removeItem('authenticatedUser')
  }
  constructor() { }
}
