import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './telas/principal/principal.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxLoadingModule } from 'ngx-loading';
import { LinksComponent } from './telas/links/links.component';
import { RecaptchaModule, RecaptchaFormsModule } from "ng-recaptcha";
import { NgxMaskModule } from 'ngx-mask'
import { AdsenseModule } from 'ng2-adsense';
import { DynamicScriptLoaderService } from './services/DynamicScriptLoaderService.service';
import { BodyComponent } from './components/body/body.component';
import { PoliticaPrivacidadeComponent } from './telas/politica-privacidade/politica-privacidade.component';
import { TermosUsoComponent } from './telas/termos-uso/termos-uso.component';
import { CookieConsentComponent } from './components/cookie-consent/cookie-consent.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    LinksComponent,
    BodyComponent,
    PoliticaPrivacidadeComponent,
    TermosUsoComponent,
    CookieConsentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxLoadingModule.forRoot({}),
    RecaptchaModule,
    RecaptchaFormsModule,
    NgxMaskModule.forRoot(),
    AdsenseModule.forRoot({
      adClient: 'ca-pub-1714046511940371',
      adSlot: 5591331167,
    }),
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    DynamicScriptLoaderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
