import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CrudModule } from './crud.module';
import { LoginModule } from './login.module';
import { ExtraModule } from './extra.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CrudModule,
    LoginModule,
    ExtraModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
