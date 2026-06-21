import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-termos-uso',
  templateUrl: './termos-uso.component.html',
  styles: [`
    .policy-container {
      padding-top: 100px;
      padding-bottom: 60px;
      background: #f8f9fa;
      min-height: 100vh;
    }
    .policy-card {
      background: #ffffff;
      border-radius: 8px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.05);
      padding: 40px;
    }
    .logo-container {
      margin-bottom: 30px;
      text-align: center;
    }
    .logo-img {
      max-height: 70px;
    }
    h1 {
      color: #002244;
      font-weight: 700;
      margin-bottom: 25px;
      border-bottom: 2px solid #cc9900;
      padding-bottom: 10px;
    }
    h2 {
      color: #002244;
      font-size: 1.5rem;
      margin-top: 30px;
      margin-bottom: 15px;
      font-weight: 600;
    }
    p, li {
      color: #555555;
      line-height: 1.8;
      font-size: 1rem;
    }
    .back-btn {
      background: #002244;
      color: #ffffff;
      border: none;
      padding: 10px 25px;
      border-radius: 4px;
      font-weight: 600;
      transition: background 0.3s ease;
      text-decoration: none;
      display: inline-block;
      margin-bottom: 20px;
    }
    .back-btn:hover {
      background: #cc9900;
      color: #ffffff;
    }
  `]
})
export class TermosUsoComponent implements OnInit {
  currentYear: number = new Date().getFullYear();

  ngOnInit() {
    window.scrollTo(0, 0);
  }
}
