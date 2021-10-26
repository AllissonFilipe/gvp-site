import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LinksComponent } from './telas/links/links.component';
import { PrincipalComponent } from './telas/principal/principal.component';


const routes: Routes = [
  { path: "", component: PrincipalComponent },
  { path: "links", component: LinksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
