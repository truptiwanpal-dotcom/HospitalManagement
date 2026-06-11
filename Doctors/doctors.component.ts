import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DoctorsListComponent } from '../doctors-list/doctors-list.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-doctors',
  imports: [FormsModule, DoctorsListComponent, CommonModule],
  templateUrl: './doctors.component.html',
  styleUrl: './doctors.component.css'
})
export class DoctorsComponent {
  doctorName: string = ''; 
}
