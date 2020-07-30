import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { MainComponent } from './main/main.component';


const routes: Routes = [
  { path: "", component: PrincipalComponent },

  { path: "index", component: PrincipalComponent },
  { path: "app", component: MainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
