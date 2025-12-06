import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  username: string = '';
  password: string = '';
  confirmPassword: string = '';
  error: string = '';
  loading: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    // Redirect if already authenticated
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/welcome']);
    }
  }

  onSubmit(): void {
    this.error = '';

    // Validation
    if (!this.username || !this.password || !this.confirmPassword) {
      this.error = 'All fields are required';
      return;
    }

    if (this.password !== this.confirmPassword) {
      this.error = 'Passwords do not match';
      return;
    }

    if (this.password.length < 3) {
      this.error = 'Password must be at least 3 characters';
      return;
    }

    this.loading = true;

    // For now, signup just redirects to login
    // In a real app, this would call a signup API endpoint
    setTimeout(() => {
      this.loading = false;
      this.router.navigate(['/login'], { 
        queryParams: { message: 'Account created successfully. Please login.' } 
      });
    }, 1000);
  }
}

