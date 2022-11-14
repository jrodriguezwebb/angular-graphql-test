import { AuthSteamReturnComponent } from './components/auth-steam-return/auth-steam-return.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    HttpClientModule,
    GraphQLModule,
    NgbModule,
  ],
  exports: [NavbarComponent, AuthSteamReturnComponent, PageNotFoundComponent],
  declarations: [
    NavbarComponent,
    AuthSteamReturnComponent,
    PageNotFoundComponent,
  ],
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
