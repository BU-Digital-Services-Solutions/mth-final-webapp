import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { RegulationsComponent } from './Components/regulations/regulations.component';
import { RegulatoryComplianceComponent } from './Components/regulatory-compliance/regulatory-compliance.component';
import { RegulatoryIntelligenceComponent } from './Components/regulatory-intelligence/regulatory-intelligence.component';
import { RegulatoryWatchComponent } from './Components/regulatory-watch/regulatory-watch.component';
import { SettingsComponent } from './Components/settings/settings.component';
import { StandardsComponent } from './Components/standards/standards.component';
import { CheckYourEmailComponent } from './Core/check-your-email/check-your-email.component';
import { ForgotPasswordComponent } from './Core/forgot-password/forgot-password.component';
import { HomeCarouselComponent } from './Core/home/home-carousel/home-carousel.component';
import { HomeComponent } from './Core/home/home.component';
import { LoginComponent } from './Core/login/login.component';
import { PageNotFoundComponent } from './Core/page-not-found/page-not-found.component';
import { PasswordResetSuccessfulComponent } from './Core/password-reset-successful/password-reset-successful.component';
import { RegisterComponent } from './Core/register/register.component';
import { ResetPasswordComponent } from './Core/reset-password/reset-password.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {path :'', component:HomeCarouselComponent},
  {path :'register', component: RegisterComponent},
  {path :'login', component: LoginComponent},
  {path:'forgot-password', component: ForgotPasswordComponent},
  {path :'reset-password', component: ResetPasswordComponent},
  {path :'password-reset-successful', component: PasswordResetSuccessfulComponent},
  {path :'check-your-email', component:CheckYourEmailComponent},
  {path:'layout', component:LayoutComponent,
  children:[
    {path:'', pathMatch:'full', redirectTo:'dashboard'},
    {path:'dashboard', pathMatch:'full',component:DashboardComponent},
    {path:'regulations', component:RegulationsComponent},
    {path:'standards', component:StandardsComponent},
    {path:'regulatory-compliance', component:RegulatoryComplianceComponent},
    {path:'regulatory-intelligence', component:RegulatoryIntelligenceComponent},
    {path:'regulatory-watch', component:RegulatoryWatchComponent},
    {path:'settings', component:SettingsComponent}
]

},
    // {path :'**' , component:PageNotFoundComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
