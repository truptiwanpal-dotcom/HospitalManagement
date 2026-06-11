import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { AboutmeComponent } from './AboutMe/aboutme.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { routes } from './app.routes';
import { LayoutComponent } from './layout/layout.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { FormsModule } from '@angular/forms'
import { DoctorsComponent } from './doctors/doctors.component';
import { DoctorsListComponent } from './doctors-list/doctors-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    PatientListComponent,
    AboutmeComponent,
    AppointmentComponent,
    DoctorsComponent,
    DoctorsListComponent
  ],
  imports: [
    RouterOutlet,
    BrowserModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }