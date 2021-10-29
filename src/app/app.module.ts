import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './telas/principal/principal.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { ContatoComponent } from './components/contato/contato.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { TestemunhosComponent } from './components/testemunhos/testemunhos.component';
import { TabelaPrecosComponent } from './components/tabela-precos/tabela-precos.component';
import { TimeComponent } from './components/time/time.component';
import { FotosComponent } from './components/fotos/fotos.component';
import { EstatisticasComponent } from './components/estatisticas/estatisticas.component';
import { ServicosComponent } from './components/servicos/servicos.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { HeaderSlideComponent } from './components/header-slide/header-slide.component';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { NgxMaskModule } from 'ngx-mask';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxLoadingModule } from 'ngx-loading';
import { LinksComponent } from './telas/links/links.component';
import { RecaptchaModule, RecaptchaFormsModule  } from "ng-recaptcha";
import { NgxMaskModule } from 'ngx-mask'

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    ContatoComponent,
    ClientesComponent,
    TestemunhosComponent,
    TabelaPrecosComponent,
    TimeComponent,
    FotosComponent,
    EstatisticasComponent,
    ServicosComponent,
    SobreComponent,
    HeaderSlideComponent,
    LinksComponent
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
    // NgxMaskModule.forRoot()
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
