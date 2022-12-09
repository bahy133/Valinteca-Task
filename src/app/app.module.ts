import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeScreenComponent } from './Components/welcome-screen/welcome-screen.component';
import { LayoutComponent } from './Components/layout/layout.component';
import { SuccessComponent } from './Components/success/success.component';
import { RegisterComponent } from './Components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeScreenComponent,
    LayoutComponent,
    SuccessComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
