import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
  useValue: 'null'
})
export class DataServiceService {

  constructor(private url: string, private http: HttpClient) { }

  get() {
    return this.http.get(this.url)
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



