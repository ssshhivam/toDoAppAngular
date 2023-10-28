import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  authenticate(username: string,password: string)
  {
       if(username==="shivam" && password==="Shivam@123")
       {
        return true;
       }
       else{
        return false;
       }
  }
  constructor() { }
}
