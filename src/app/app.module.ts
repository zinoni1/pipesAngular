import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BasicsPageComponent } from './products/pages/basics-page/basics-page.component';

//config locale de la app
import localeEs from '@angular/common/locales/es-AR'
import localeFr from '@angular/common/locales/fr-PF'
import {registerLocaleData} from '@angular/common';
registerLocaleData(localeEs)
registerLocaleData(localeFr)
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'es-AR'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
