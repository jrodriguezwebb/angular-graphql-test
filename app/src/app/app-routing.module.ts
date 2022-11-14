import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthSteamReturnComponent } from './core/components/auth-steam-return/auth-steam-return.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'auth/steam/return', component: AuthSteamReturnComponent },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
