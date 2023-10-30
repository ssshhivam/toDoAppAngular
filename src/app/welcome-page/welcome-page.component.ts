import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {
name=''
welcomeMessageFromService:string=''
errorMessage:String=''
constructor(private route:ActivatedRoute,
  private serviceData:WelcomeDataService){}  //whichever route is active now..it would give and from there we can get the parameters we want

  ngOnInit(): void {
  //  console.log(this.route.snapshot.params['name']) //from the activated route which we got we would like to pickup the param name from it which is passed..params is a map name is a key
  this.name=this.route.snapshot.params['name']
  }
  getWelcomeMessage()
  {
    console.log(this.serviceData.executeHelloBeanData());
     this.serviceData.executeHelloBeanData()
     .subscribe(response=>this.handleSuccessfulResponse(response),
      error=>this.handleErrorResponse(error));
    //console.log("welcome message through hellobean Executed")

  }
handleSuccessfulResponse(response:any)
{
  this.welcomeMessageFromService=response.message
  
}
handleErrorResponse(error:any)
{
this.errorMessage=error.message
}
}

