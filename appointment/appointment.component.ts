import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppointmentService } from './appointment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointment',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.css'
})
export class AppointmentComponent {
  constructor(private appointmentService: AppointmentService,
    private router: Router
  ) {}

  appointment = {
    fullName: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    department: '',
    message: ''
  };

  
  submitForm(){
    this.appointmentService.addAppointment(this.appointment);
    this.router.navigate(['/patients']);
  }
}
