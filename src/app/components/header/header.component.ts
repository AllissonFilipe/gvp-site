import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isMobileNavOpen = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  toggleMobileNav() {
    this.isMobileNavOpen = !this.isMobileNavOpen;
    const body = document.querySelector('body');
    if (this.isMobileNavOpen) {
      body.classList.add('mobile-nav-active');
    } else {
      body.classList.remove('mobile-nav-active');
    }
  }

  closeMobileNav() {
    this.isMobileNavOpen = false;
    const body = document.querySelector('body');
    body.classList.remove('mobile-nav-active');
  }

  redirectToLinks() {
    this.closeMobileNav();
    this.router.navigate([]).then(result => {  window.open('/links', '_blank'); });
  }

}
