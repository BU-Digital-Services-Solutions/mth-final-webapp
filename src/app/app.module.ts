import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';


import { MaterialModule } from './Shared/modules/material/material.module';
import { LoginComponent } from './Core/login/login.component';
import { ForgotPasswordComponent } from './Core/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './Core/reset-password/reset-password.component';
import { PasswordResetSuccessfulComponent } from './Core/password-reset-successful/password-reset-successful.component';
import { RegisterComponent } from './Core/register/register.component';
import { CheckYourEmailComponent } from './Core/check-your-email/check-your-email.component';
import { HomeComponent } from './Core/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { PageNotFoundComponent } from './Core/page-not-found/page-not-found.component';
import { SideNavComponent } from './Core/side-nav/side-nav.component';
import { HeaderComponent } from './Core/header/header.component';
import { HomeHeaderComponent } from './Core/home/home-header/home-header.component';
import { HomeCarouselComponent } from './Core/home/home-carousel/home-carousel.component';
import { LayoutComponent } from './layout/layout.component';
import { RegulationsComponent } from './Components/regulations/regulations.component';
import { ByCountryComponent } from './Components/regulations/by-country/by-country.component';
import { RegulationsService } from './Services/regulations.service';
import { StandardsComponent } from './Components/standards/standards.component';
import { RegulatoryIntelligenceComponent } from './Components/regulatory-intelligence/regulatory-intelligence.component';
import { SettingsComponent } from './Components/settings/settings.component';
import { RegulatoryWatchComponent } from './Components/regulatory-watch/regulatory-watch.component';
import { ByTagComponent } from './Components/regulations/by-tag/by-tag.component';
import { RegulatoryComplianceComponent } from './Components/regulatory-compliance/regulatory-compliance.component';
import { PopupComponent } from './Others/popup/popup.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    PasswordResetSuccessfulComponent,
    RegisterComponent,
    CheckYourEmailComponent,
    HomeComponent,
    DashboardComponent,
    PageNotFoundComponent,
    SideNavComponent,HeaderComponent, 
    HomeHeaderComponent,
    HomeCarouselComponent,
    LayoutComponent,
    RegulationsComponent,
    ByCountryComponent,
    StandardsComponent,
    RegulatoryIntelligenceComponent,
    SettingsComponent,
    RegulatoryWatchComponent,
    ByTagComponent,
    RegulatoryComplianceComponent,
    PopupComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  
  ],
  providers: [RegulationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
