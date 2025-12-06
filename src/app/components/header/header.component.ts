import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { LoginModalComponent } from '../login-modal/login-modal.component';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, LoginModalComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  showLoginModal: boolean = false;

  constructor(
    private router: Router,
    public authService: AuthService
  ) {}

  isActiveRoute(route: string): boolean {
    const currentUrl = this.router.url;
    return currentUrl === route || currentUrl.startsWith(route + '/');
  }

  openLoginModal(): void {
    this.showLoginModal = true;
  }

  closeLoginModal(): void {
    this.showLoginModal = false;
  }

  logout(): void {
    this.authService.logout();
  }
}

