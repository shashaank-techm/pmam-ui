import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {NoopAnimationsModule,BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MyMaterialModule } from './modules/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';

import { FlexLayoutModule } from "@angular/flex-layout";
import { HomePageComponent } from './home-page/home-page.component';
import { TopbarComponent } from './topbar/topbar.component';
import { SignInDialog,SignUpDialog,TaglinePageComponent,ViewFeaturesDialogStandard,ViewFeaturesDialogPremium,ViewFeaturesDialogGold } from './tagline-page/tagline-page.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TopbarComponent,
    TaglinePageComponent,
    ViewFeaturesDialogStandard,
    ViewFeaturesDialogGold,
    ViewFeaturesDialogPremium,
    SignInDialog,
    SignUpDialog,
    UserRegistrationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MyMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([{
      path:'',
      component:HomePageComponent,
    },{
      path:'userRegistration',
      component:UserRegistrationComponent
    }])
  ],
entryComponents: [SignUpDialog,SignInDialog,TaglinePageComponent, ViewFeaturesDialogStandard, ViewFeaturesDialogPremium, ViewFeaturesDialogGold],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
