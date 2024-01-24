import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { DataServiceService, Employee } from '../../service/data.service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit, OnDestroy, AfterViewInit {
  employees: Employee[] = [];
  dtOptions: DataTables.Settings = {};
  @ViewChild(DataTableDirective, {static: false})
  dtElement: DataTableDirective = {} as DataTableDirective;
  dtTrigger: Subject<any> = new Subject();

  detailForm! : FormGroup;
  constructor(private service: DataServiceService, private formBuilder: FormBuilder, private route: Router) {
    this.detailForm = this.createForm();
  }

  createForm(){
    return this.formBuilder.group({
      username: ["",Validators.required],
      firstName: ["",Validators.required],
      lastName: [],
      birthDate: ["",Validators.required],
      email: ["",Validators.compose([Validators.required, Validators.email])],
      basicSalary: ["",Validators.required],
      status: [],
      group: ["",Validators.required],
      description: []
    })
  }

  toogleStatus(event : any) {
    const checkbox = event.target;
    this.detailForm.get('status')!.setValue(checkbox.checkbox ? 1 : 0);
    this.detailForm.get('status')!.setValue(undefined ? 0 : 1);

  }
  onSubmit() {
    this.createEmployee();
    // location.reload();
    this.route.navigateByUrl('/employees');
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
      console.log(this.dtElement);
    },
    (error) =>{
      console.log('Error fetching employees:', error);
    });
  }


  createEmployee() {
    const newEmployee = this.detailForm.getRawValue();

    this.service.create(JSON.stringify(newEmployee)).subscribe((data) => {
      console.log('Employee created:', data);
    });
  }

  updateEmployee(employeeId: string | number) {
    // alert(employeeId);
    const updatedEmployee = {
    };

    this.service.updateById(employeeId, JSON.stringify(updatedEmployee)).subscribe((data) => {
      console.log('Employee updated:', data);
    });
  }

  deleteEmployee(employeeId: string | number) {
    // alert(employeeId);
    this.service.deleteById(employeeId).subscribe(() => {
      console.log('Employee deleted');
    });
  }
}
