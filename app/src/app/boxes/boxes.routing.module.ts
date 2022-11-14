import { BoxesComponent } from './boxes.component';
import { RouterModule, Routes } from '@angular/router';
import { SelectedBoxComponent } from './selected-box/selected-box.component';
import { BoxesRoutesEnum } from './boxes.routes';

const routes: Routes = [
  { path: '', component: BoxesComponent },
  { path: BoxesRoutesEnum.SelectedBox, component: SelectedBoxComponent },
];

export const routing = RouterModule.forChild(routes);
