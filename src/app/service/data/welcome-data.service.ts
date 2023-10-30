import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private httpclient:HttpClient) { }
  executeHelloBeanData()
  {
    return  this.httpclient.get('http://localhost:8080/helloBean');
    
  }
}
export class HelloBeanResponseFormat{
  constructor(private message:String){}
}