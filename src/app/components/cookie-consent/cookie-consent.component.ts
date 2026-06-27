import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cookie-consent',
  templateUrl: './cookie-consent.component.html',
  styleUrls: ['./cookie-consent.component.css']
})
export class CookieConsentComponent implements OnInit {
  showBanner: boolean = false;

  ngOnInit() {
    this.checkConsent();
  }

  checkConsent() {
    const consent = localStorage.getItem('gvpCookieConsent');
    if (!consent) {
      setTimeout(() => {
        this.showBanner = true;
      }, 1500);
    }
  }

  acceptConsent() {
    const consentData = {
      accepted: true,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('gvpCookieConsent', JSON.stringify(consentData));
    this.showBanner = false;
  }
}
