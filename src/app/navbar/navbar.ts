import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  isMobileMenuOpen = false;
  activeSubmenu: string | null = null;

  /** When true, all submenus are shown by default on mobile open */
  openAllSubmenus = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;

    if (this.isMobileMenuOpen) {
      // Auto-open all menus on first click & push content down (handled by CSS)
      this.openAllSubmenus = true;
    } else {
      this.activeSubmenu = null;
      this.openAllSubmenus = false;
    }
  }

  toggleMobileSubmenu(event: Event) {
    // Once user starts toggling, stop "open all" mode
    this.openAllSubmenus = false;

    const parentLi = (event.target as HTMLElement).closest('.has-submenu-mobile') as HTMLElement | null;
    if (!parentLi) return;

    const navLink = parentLi.querySelector('.nav-link');
    const menuText = navLink?.textContent?.trim() || '';
    this.activeSubmenu = this.activeSubmenu === menuText ? null : menuText;
  }

  // ESC closes the mobile menu
  @HostListener('document:keydown.escape')
  onEsc() {
    this.isMobileMenuOpen = false;
    this.openAllSubmenus = false;
    this.activeSubmenu = null;
  }
}
