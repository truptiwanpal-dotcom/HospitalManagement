import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByName'
})
export class FilterByNamePipe implements PipeTransform {

  transform(doctors: any[], filterText: string): any[] {
    if (!filterText) return doctors;
    return doctors.filter(doctor =>
      doctor.fullName.toLowerCase().includes(filterText.toLowerCase())
    );
  }
}
