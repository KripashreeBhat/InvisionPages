import { Injectable, ResolvedReflectiveFactory } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ServicesService } from './services.service';

@Injectable({
  providedIn: 'root'
})
export class PermissionGuard implements CanActivate {
  constructor(private permission: ServicesService){}
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
      // return true;
      window.alert('permission denied');
      return false;
      
    }
  //  return false;
      
        
  }
   
    
// }
  
  
}
