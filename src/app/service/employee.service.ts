import { Injectable } from '@angular/core';
import { DataServiceService } from './data.service.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService extends DataServiceService {

}
