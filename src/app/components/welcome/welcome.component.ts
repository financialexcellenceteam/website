import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit {
  username: string | null = '';
  message: string = '';
  loading: boolean = true;

  constructor(
    private authService: AuthService,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.username = this.authService.getUsername();
    this.fetchWelcomeMessage();
  }

  fetchWelcomeMessage(): void {
    this.http.get<{message: string}>('http://localhost:8080/api/welcome')
      .subscribe({
        next: (data) => {
          this.message = data.message;
          this.loading = false;
        },
        error: (err) => {
          this.message = 'Unable to fetch welcome message';
          this.loading = false;
          if (err.status === 401) {
            this.authService.logout();
          }
        }
      });
  }

  logout(): void {
    this.authService.logout();
  }
}

