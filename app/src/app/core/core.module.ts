import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule, Optional, SkipSelf } from '@angular/core';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    GraphQLModule,
    NgbModule,
  ],
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
