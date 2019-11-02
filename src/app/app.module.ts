import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './main/home/home.component';
import { WelcomeComponent } from './main/welcome/welcome.component';
import { HeaderComponent } from './main/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './main/footer/footer.component';
import { ResumeComponent } from './main/resume/resume.component';
import { ScrollSpyDirective } from './directives/scroll-spy.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WelcomeComponent,
    HeaderComponent,
    FooterComponent,
    ResumeComponent,
    ScrollSpyDirective
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MatSliderModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
