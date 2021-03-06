import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutTeacherComponent } from './about-teacher/about-teacher.component';
import { BlogComponent } from './blog/blog.component';
import { CoursesComponent } from './courses/courses.component';
import { MoreComponent } from './more/more.component';
import { LoginComponent } from './login/login.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { FormSignupComponent } from './form-signup/form-signup.component';
import { ExercisesComponent } from './exercises/exercises.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { FormContactComponent } from './form-contact/form-contact.component';
import { FormResetpasswordComponent } from './form-resetpassword/form-resetpassword.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'aboutteacher', component: AboutTeacherComponent },
  { path: 'contact', component: FormContactComponent },
  { path: 'frenchCourses', component: CoursesComponent },
  { path: 'exercises', component: ExercisesComponent, canActivate: [AuthGuard] },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'articles', component: BlogComponent },
  { path: 'news', component: MoreComponent },
  {
    path: 'login', component: LoginComponent,
    children: [
      { path: '', redirectTo: 'loginForm', pathMatch: 'full' },
      { path: 'login-form', component: FormLoginComponent },
      { path: 'signup-form', component: FormSignupComponent },
      { path: 'reset', component: FormResetpasswordComponent }
    ]
  },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule],
})
export class AppRoutingModule { }

export const routingComponents = [
  HomeComponent
];
