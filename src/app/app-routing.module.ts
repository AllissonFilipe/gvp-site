import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LinksComponent } from './telas/links/links.component';
import { PrincipalComponent } from './telas/principal/principal.component';
import { PoliticaPrivacidadeComponent } from './telas/politica-privacidade/politica-privacidade.component';
import { TermosUsoComponent } from './telas/termos-uso/termos-uso.component';


const routes: Routes = [
  { path: "", component: PrincipalComponent },
  { path: "links", component: LinksComponent },
  { path: "politica-de-privacidade", component: PoliticaPrivacidadeComponent },
  { path: "termos-de-uso", component: TermosUsoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
