import { Component, OnInit } from '@angular/core';
import { ResolveEnd, ResolveStart, Router } from '@angular/router';
import { Observable, filter, mapTo, merge } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  private showLoader!: Observable<boolean>;
  private hideLoader!: Observable<boolean>;

  public isLoading!: Observable<boolean>;
  
  constructor(private authService: AuthService, private router: Router) {}

  public logout() {
    this.authService.logout();
  }

  ngOnInit() {
    this.hideLoader = this.router.events.pipe(filter(e => e instanceof ResolveEnd), mapTo(false));

    this.showLoader = this.router.events.pipe(filter(e => e instanceof ResolveStart), mapTo(true));

    this.isLoading = merge(this.hideLoader, this.showLoader)
  }
}
