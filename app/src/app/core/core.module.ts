import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { GraphQLModule } from './graphql.module';

@NgModule({
  imports: [BrowserModule, CommonModule, HttpClientModule, GraphQLModule],
  exports: [NavbarComponent],
  declarations: [NavbarComponent],
  providers: [],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'ERROR: CoreModule is already loaded. Import it in the AppModule only!'
      );
    }
  }
}
