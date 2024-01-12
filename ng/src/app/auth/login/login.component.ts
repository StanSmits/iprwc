import {AfterViewInit, Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {LocalUserService} from '../../shared/services/localUser.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, AfterViewInit {
  loginForm!: FormGroup;
  error: string | undefined;
  loading: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private localUserService: LocalUserService
  ) {
  }

  ngOnInit() {
    this.initForm();
  }

  private initForm(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.email,
        Validators.pattern(
          /^(?=.{1,64}@)[A-Za-z0-9_-]+(\.[A-Za-z0-9_-]+)*@[^-][A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*(\.[A-Za-z]{2,})$/
        ),
      ]),
      password: new FormControl(null, Validators.required),
      rememberMe: new FormControl(false),
    });
  }

  // Make the wave at the bottom of the page with id "wave" move from left to right continuously
  ngAfterViewInit() {
    const wave = document.getElementById('wave');
    if (wave) {
      let waveValue = 0;
      let waveDirection = 1;
      setInterval(() => {
        if (waveValue < -5000) {
          waveDirection = 1;
        }
        if (waveValue > 0) {
          waveDirection = -1;
        }

        waveValue += waveDirection;
        wave.style.backgroundPosition = waveValue + 'px 0';
      }, 10);
    }
  }

  onLogin() {
    this.loading = true;

    const email = this.loginForm.value['email'];
    const password = this.loginForm.value['password'];
    const rememberMe: boolean = this.loginForm.value['rememberMe'];
    const referrerUrl = document.referrer;

    this.authService.login(email, password, rememberMe).subscribe({
      next: () => {
        if (this.localUserService.isLoggedIn) {
          const redirectUrl = referrerUrl;
          this.router.navigateByUrl(redirectUrl);

          this.loginForm.reset();
          this.loading = false;
        }
      },
      error: errorMessage => {
        this.error = errorMessage;
        this.loading = false;
        this.loginForm.get('password')?.reset();
      }
    });
  }
}
