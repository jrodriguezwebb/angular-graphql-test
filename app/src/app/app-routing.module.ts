import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthSteamReturnComponent } from './core/components/auth-steam-return/auth-steam-return.component';

const routes: Routes = [
  { path: '', redirectTo: 'boxes', pathMatch: 'full' },
  { path: 'auth/steam/return', component: AuthSteamReturnComponent },
  {
    path: 'boxes',
    loadChildren: () => import('./boxes/boxes.module').then(m => m.BoxesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
