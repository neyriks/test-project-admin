import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {}

  public hide = true;
  // public userInfo$: Observable<IUser[]>

  public form = new FormGroup({
    username: new FormControl<string>('', [Validators.required, Validators.email]),
    password: new FormControl<string>('', Validators.required)
  })

  public onSubmit() {
    if(this.form.invalid) {
      return
    }

    this.authService.login(this.form.value).subscribe({
      next: () => this.router.navigate(['admin']),
      error: (error) => alert(error.message)
    })

    // this.userInfo$ = this.authService.login(this.form.value)
  }

}
