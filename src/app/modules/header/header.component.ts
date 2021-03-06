import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private router: Router, private authService: AuthService) {}

  onLogoutClick = () => {
    this.authService.logout();
  }

  onHomepageClick = ($event: MouseEvent) => {
    this.router.navigate(['homepage']);
  }

  onMyBooksClick = ($event: MouseEvent) => {
    this.router.navigate(['personal-book-page']);
  }
}
