import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login-modal.component.html',
  styleUrl: './login-modal.component.css'
})
export class LoginModalComponent {
  @Output() closeModal = new EventEmitter<void>();
  
  error: string = '';
  loading: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    // Redirect if already authenticated
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/welcome']);
      this.close();
    }
  }

  close(): void {
    this.closeModal.emit();
  }

  onBackdropClick(event: Event): void {
    if ((event.target as HTMLElement).classList.contains('modal-backdrop')) {
      this.close();
    }
  }

  onLoginWithGoogle(): void {
    this.error = '';
    this.loading = true;

    // Login with hardcoded credentials
    this.authService.login({
      username: 'admin',
      password: 'admin'
    }).subscribe({
      next: () => {
        this.close();
        this.router.navigate(['/welcome']);
      },
      error: (err) => {
        this.error = err.error?.error || 'Authentication failed. Please try again.';
        this.loading = false;
      }
    });
  }
}

