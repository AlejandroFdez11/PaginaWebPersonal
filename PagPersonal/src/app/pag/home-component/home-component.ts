import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home-component',
  imports: [],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css',
})
export class HomeComponent {
  isNavHidden = false;
  isScrolled = false;
  isMobileMenuOpen = false;

  private lastScrollY = 0;
  private readonly scrollThreshold = 12;

  @HostListener('window:scroll')
  onWindowScroll(): void {
    const currentScrollY = window.scrollY;

    this.isScrolled = currentScrollY > 24;

    // En la parte superior la barra siempre permanece visible.
    if (currentScrollY <= 80) {
      this.isNavHidden = false;
      this.lastScrollY = currentScrollY;
      return;
    }

    // Oculta al bajar y reaparece al subir, evitando reaccionar a movimientos mínimos.
    const scrollDelta = currentScrollY - this.lastScrollY;
    if (Math.abs(scrollDelta) >= this.scrollThreshold) {
      if (scrollDelta > 0 && !this.isMobileMenuOpen) {
        this.isNavHidden = true;
      } else if (scrollDelta < 0) {
        this.isNavHidden = false;
      }
      this.lastScrollY = currentScrollY;
    }
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    if (this.isMobileMenuOpen) {
      this.isNavHidden = false;
    }
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }

  scrollToSection(sectionId: string): void {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }
}
