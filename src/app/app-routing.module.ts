import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './main/welcome/welcome.component';
import { HomeComponent } from './main/home/home.component';
import { ResumeComponent } from './main/resume/resume.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: 'resume',
    component: ResumeComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
