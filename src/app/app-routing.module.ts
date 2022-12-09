import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './Components/layout/layout.component';
import { RegisterComponent } from './Components/register/register.component';
import { SuccessComponent } from './Components/success/success.component';
import { WelcomeScreenComponent } from './Components/welcome-screen/welcome-screen.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: WelcomeScreenComponent },
      { path: 'Register', component: RegisterComponent },
      { path: 'Success', component: SuccessComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
