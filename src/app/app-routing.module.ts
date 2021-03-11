import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

const routes: Routes = [
  // path: Dashboard ---> PagesRoutingModule
  // path: login ---> AuthRoutingModule
  {path: '', redirectTo:'/dashboard', pathMatch:'full'},
  {path: '**', component:NopagefoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
