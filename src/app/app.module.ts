import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutTeacherComponent } from './about-teacher/about-teacher.component';
import { CoursesComponent } from './courses/courses.component';
import { BlogComponent } from './blog/blog.component';
import { MoreComponent } from './more/more.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { FormSignupComponent } from './form-signup/form-signup.component';
import { ExercisesComponent } from './exercises/exercises.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { FormContactComponent } from './form-contact/form-contact.component';

import { ComparValidatorDirective } from './shered/compar-validator.directive';
import { FormResetpasswordComponent } from './form-resetpassword/form-resetpassword.component';
import { AuthService } from './services/auth.service';
import { DataService } from './services/data.service';
import { AuthGuard } from './auth/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutTeacherComponent,
    CoursesComponent,
    BlogComponent,
    MoreComponent,
    LoginComponent,
    MenuComponent,
    ComparValidatorDirective,
    FormLoginComponent,
    FormSignupComponent,
    ExercisesComponent,
    ScheduleComponent,
    FormContactComponent,
    FormResetpasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    MatChipsModule,
    MatIconModule,
    MatTabsModule,
    HttpClientModule
  ],
  providers: [DataService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
