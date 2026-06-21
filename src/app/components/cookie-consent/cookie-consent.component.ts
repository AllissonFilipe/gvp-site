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
    } else {
      // Consent was previously given — load third-party scripts immediately
      this.loadThirdPartyScripts();
    }
  }

  acceptConsent() {
    const consentData = {
      accepted: true,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('gvpCookieConsent', JSON.stringify(consentData));
    this.showBanner = false;
    this.loadThirdPartyScripts();
  }

  private loadThirdPartyScripts() {
    // Load Google AdSense only after explicit consent
    if (!document.getElementById('adsense-script')) {
      const script = document.createElement('script');
      script.id = 'adsense-script';
      script.async = true;
      script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1714046511940371';
      script.crossOrigin = 'anonymous';
      document.head.appendChild(script);
    }
  }
}
