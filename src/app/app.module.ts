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
    HeaderSlideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
