import { BoxComponent } from './components/box/box.component';
import { CommonModule } from '@angular/common';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [CommonModule],
  exports: [LoadingSpinnerComponent, BoxComponent, CommonModule],
  declarations: [LoadingSpinnerComponent, BoxComponent],
  providers: [],
})
export class SharedModule {}
