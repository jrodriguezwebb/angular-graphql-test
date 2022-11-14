import { BoxesComponent } from './boxes.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { routing } from './boxes.routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [CommonModule, SharedModule, routing],
  declarations: [BoxesComponent],
})
export class BoxesModule {}
