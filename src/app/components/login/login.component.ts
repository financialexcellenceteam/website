import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  error: string = '';
  loading: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    // Redirect if already authenticated
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/welcome']);
    }

    // Check for signup success message
    this.route.queryParams.subscribe(params => {
      if (params['message']) {
        // Could show a success message here if needed
      }
    });
  }

  onSubmit(): void {
    this.error = '';
    this.loading = true;

    this.authService.login({
      username: this.username,
      password: this.password
    }).subscribe({
      next: () => {
        this.router.navigate(['/welcome']);
      },
      error: (err) => {
        this.error = err.error?.error || 'Invalid credentials. Please try again.';
        this.loading = false;
      }
    });
  }
}

