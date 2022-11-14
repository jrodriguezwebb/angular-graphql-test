import { BoxesComponent } from './boxes.component';
import { RouterModule, Routes } from '@angular/router';
import { SelectedBoxComponent } from './selected-box/selected-box.component';

const routes: Routes = [
  { path: '', component: BoxesComponent },
  { path: 'selected-box', component: SelectedBoxComponent },
];

export const routing = RouterModule.forChild(routes);
