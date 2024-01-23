import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from '../../service/employee.service';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { DataServiceService } from '../../service/data.service.service';
import { error } from 'jquery';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit, OnDestroy, AfterViewInit {
  employees: any[] = [];
  dtOptions: DataTables.Settings = {};
  @ViewChild(DataTableDirective, {static: false})
  dtElement: DataTableDirective = {} as DataTableDirective;
  dtTrigger: Subject<any> = new Subject();
  constructor(private service: DataServiceService) {

  }
  ngOnInit(): void {
    this.getAllEmployees();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
    };
  }

  ngAfterViewInit(): void {

  }

  ngOnDestroy(): void {
    
  }

  getAllEmployees() {
    this.service.get().subscribe((data) => {
      console.log('All Employees:', data);
      this.employees = data as any;
      this.dtTrigger.next(null);
      console.log(this.dtElement.dtTrigger);
      console.log(this.dtElement.dtInstance);
    },
    (error) =>{
      console.log('Error fetching employees:', error);
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

  trackByItem(item:any) {
    return item ? item : undefined
  }
}
