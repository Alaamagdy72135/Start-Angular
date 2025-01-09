import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  @ViewChild('navbar') navbar!: ElementRef;
  @HostListener('window:scroll', ['$event'])
  @HostListener('window:mouseout', ['$event'])
  @HostListener('window:mouseenter', ['$event'])
  onWindowScroll() {
    if (window.scrollY > 0) {
      this.navbar.nativeElement.classList.remove('updateHeight');
      this.navbar.nativeElement.classList.add('removeHeight');
    } else {
      this.navbar.nativeElement.classList.add('updateHeight');
      this.navbar.nativeElement.classList.remove('removeHeight');
    }
  }
  @ViewChild('navbarToggler') navbarToggler!: ElementRef;
  collapseNav() {
    this.navbarToggler.nativeElement.click();
  }
  ngAfterViewInit() {
    this.onWindowScroll();
  }
}
