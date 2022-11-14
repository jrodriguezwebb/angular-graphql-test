import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { routing } from './home.routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [CommonModule, SharedModule, routing],
  declarations: [HomeComponent],
})
export class HomeModule {}
