import { Injectable } from '@angular/core'

@Injectable()
export class LoginService {

  constructor() { }

  login(name) {
    sessionStorage.setItem('name', name)
  }

  logout() {
    sessionStorage.clear()
  }

  isLogin() {
    if(sessionStorage.getItem('name') != null)
      return true;
    else
      return false
  }
}