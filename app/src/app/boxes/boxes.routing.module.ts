import { BoxesComponent } from './boxes.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: BoxesComponent }];

export const routing = RouterModule.forChild(routes);
