import { Routes } from '@angular/router';
import { PatientListComponent } from './patient-list/patient-list.component';
import { HomeComponent } from './home/home.component';
import { AboutmeComponent } from './AboutMe/aboutme.component';
import { LayoutComponent } from './layout/layout.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  {
    path: '', component: LayoutComponent, 
    children:
    [
      { path: '', component: LoginComponent },
      { path: 'home', component: HomeComponent },
      { path: 'patients', component: PatientListComponent },
      { path: 'aboutMe', component: AboutmeComponent },
      { path: 'appointment', component: AppointmentComponent },
      { path: 'doctors', component: DoctorsComponent }
    ]
  }  
];