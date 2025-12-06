import { Component, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { LoginModalComponent } from '../login-modal/login-modal.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent, LoginModalComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  @ViewChild('bottomSection', { static: false }) bottomSection!: ElementRef;
  @ViewChild('orbitSection', { static: false }) orbitSection!: ElementRef;
  @ViewChild('ctaSection', { static: false }) ctaSection!: ElementRef;
  isSectionVisible = false;
  isOrbitVisible = false;
  isCtaVisible = false;
  showLoginModal = false;
  private observer?: IntersectionObserver;

  ngAfterViewInit() {
    this.setupIntersectionObserver();
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  openLoginModal() {
    this.showLoginModal = true;
  }

  closeLoginModal() {
    this.showLoginModal = false;
  }

  private setupIntersectionObserver() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target === this.bottomSection?.nativeElement) {
            this.isSectionVisible = true;
          } else if (entry.target === this.orbitSection?.nativeElement) {
            this.isOrbitVisible = true;
          } else if (entry.target === this.ctaSection?.nativeElement) {
            this.isCtaVisible = true;
          }
          if (this.observer) {
            this.observer.unobserve(entry.target);
          }
        }
      });
    }, options);

    if (this.bottomSection?.nativeElement) {
      this.observer.observe(this.bottomSection.nativeElement);
    }
    if (this.orbitSection?.nativeElement) {
      this.observer.observe(this.orbitSection.nativeElement);
    }
    if (this.ctaSection?.nativeElement) {
      this.observer.observe(this.ctaSection.nativeElement);
    }
  }
}

