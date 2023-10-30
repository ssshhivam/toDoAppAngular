import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot,  CanActivateChild,  Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';


@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivateChild {
  constructor(private hardcodedAuthenticationService:HardcodedAuthenticationService
    ,private router:Router) { 

  }
  
 canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) 
 {
   if(this.hardcodedAuthenticationService.isUserLoggedIn())
   {
    return true
   } 
    this.router.navigate(['login'])
   
   return false
   
 }
  
}
