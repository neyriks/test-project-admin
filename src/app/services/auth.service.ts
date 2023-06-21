import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  public setToken(token: string) {
    localStorage.setItem('token', token)
  }

  public getToken() {
    return localStorage.getItem('token')
  }

  public isLoggedIn() {
    return this.getToken() !== null;
  }

  public login(userInfo: any): Observable<string | boolean> {
    if(userInfo.username === 'admin@gmail.com' && userInfo.password === 'admin') {
      this.setToken('randomToken')
      return of(true)
    }
    return throwError(() => new Error('Failed login'))
  }

  logout(){
    this.router.navigate(['login'])
  }
}
