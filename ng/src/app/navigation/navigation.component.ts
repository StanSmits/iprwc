import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { LocalUserService } from '../shared/services/localUser.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  user: any;
  collapsed: boolean = true;
  amountOfItemsInCart: number = JSON.parse(localStorage.getItem('cart') || "[]").length || 0;

  constructor(
    private authService: AuthService,
    private localUserService: LocalUserService
  ) {}

  ngOnInit() {
    this.user = this.localUserService.localUser;
  }

  onLogout() {
    this.authService.logout();
  }
}
