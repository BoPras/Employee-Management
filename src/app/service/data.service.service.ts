import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
  useValue: 'null'
})
export class DataServiceService {
  private url: string = 'http://localhost:3000/employees';

  constructor( private http: HttpClient) { }

  get(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.url)
  }

  create(body: any) {
    return this.http.post(this.url, body)
  }

  updateById(id: string | number, body: any) {
    return this.http.patch(this.url + '/' + id, body)
  }

  deleteById(id: string | number) {
    return this.http.delete(this.url + '/' + id)
  }

}
export type Employee = {
  username: string,
  firstName: string,
  lastName: string,
  email: string,
  birthDate: string,
  status: boolean,
  group: string,
  discription: string,
  id: string
}



