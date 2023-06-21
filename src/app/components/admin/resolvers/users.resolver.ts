import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { EMPTY, Observable, catchError, delay } from "rxjs";
import { AdminService } from '../services/admin.service';
import { IUser } from '../interfaces/user';

@Injectable({
  providedIn: "root"
})
export class UsersResolver implements Resolve<IUser[]> {

  constructor(private adminService: AdminService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IUser[]> {
    return this.adminService.getPersonalList().pipe(
      delay(2000),
      catchError(error => {
        this.router.navigate(['admin/contacts']);
        return EMPTY
      })
    );
  }
}