import { BoxComponent } from './components/box/box.component';
import { CommonModule } from '@angular/common';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { NgModule } from '@angular/core';
import { ImgFallbackModule } from 'ngx-img-fallback';

@NgModule({
  imports: [CommonModule, ImgFallbackModule],
  exports: [LoadingSpinnerComponent, BoxComponent, CommonModule],
  declarations: [LoadingSpinnerComponent, BoxComponent],
  providers: [],
})
export class SharedModule {}
