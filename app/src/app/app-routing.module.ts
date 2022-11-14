import { AuthSteamReturnComponent } from './core/components/auth-steam-return/auth-steam-return.component';
import { BoxesRoutesEnum } from './boxes/boxes.routes';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: BoxesRoutesEnum.Boxes, pathMatch: 'full' },
  { path: 'auth/steam/return', component: AuthSteamReturnComponent },
  {
    path: BoxesRoutesEnum.Boxes,
    loadChildren: () => import('./boxes/boxes.module').then(m => m.BoxesModule),
  },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
