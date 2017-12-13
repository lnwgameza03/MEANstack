import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LoginService } from './services/login.service';

@Injectable()
export class AuthguardGuard implements CanActivate {
  
  constructor(private router:Router, private loginService:LoginService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(!this.loginService.isLogin()) {
        this.router.navigate(['/login']);
      }else{
        return this.loginService.isLogin();
      }
  }
}