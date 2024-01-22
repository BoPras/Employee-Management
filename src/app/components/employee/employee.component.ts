import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../service/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit{
  employees: any[] = [];
  constructor(private service: EmployeeService) {

   }
  ngOnInit(): void {
    this.getAllEmployees();
  }

  getAllEmployees() {
    this.service.get().subscribe((data) => {
      console.log('All Employees:', data);
      this.employees = data as any;
    });
  }

  createEmployee() {
    const newEmployee = {
      // Add the properties of the new employee
    };

    this.service.create(JSON.stringify(newEmployee)).subscribe((data) => {
      console.log('Employee created:', data);
    });
  }

  updateEmployee(employeeId: string | number) {
    const updatedEmployee = {
      // Add the properties to update
    };

    this.service.updateById(employeeId, JSON.stringify(updatedEmployee)).subscribe((data) => {
      console.log('Employee updated:', data);
    });
  }

  deleteEmployee(employeeId: string | number) {
    this.service.deleteById(employeeId).subscribe(() => {
      console.log('Employee deleted');
    });
  }
}
