import { Injectable, ResolvedReflectiveFactory } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ServicesService } from './services.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PermissionGuard implements CanActivate {
  constructor(private permission: ServicesService , private route: Router){}
  // retrieve(){
  //   localStorage.getItem('name')&&
  //   localStorage.getItem('password')

  // }
  canActivate(){
    // route: ActivatedRouteSnapshot,
    // state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    // LOGIC PART FOR NAVIGATION
    
    if(this.permission.isLogedIn()){
      // return false;
      return true;
    }
    else{
      this.route.navigate(['login']);
      alert('permission denied, You have not logged In');
      // return true;
      return false;
      
    }
  //  return false;
      
        
  }
   
    
// }
  
  
}
