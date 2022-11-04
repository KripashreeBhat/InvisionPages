import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ServicesService } from './services.service';

@Injectable({
  providedIn: 'root'
})
export class NobackAuthGuard implements CanActivate {
  constructor(private service: ServicesService,private route:Router){}
  canActivate():boolean | UrlTree{
    if(!this.service.isLoggedout())
    return true;
    return this.route.parseUrl('profile');
    // route: ActivatedRouteSnapshot,
    // state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    }
   
  }
  

