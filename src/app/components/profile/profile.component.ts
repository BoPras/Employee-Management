import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{
  idUser: string =''
  userData: any = {}

  constructor(private activeRoute: ActivatedRoute, private http: HttpClient){

  }

  ngOnInit(): void {
    this.idUser = this.activeRoute.snapshot.params['id'];
    this.http.get('http://localhost:3000/employees/' + this.idUser).subscribe((data) => {
      this.userData = data
      console.log(data);
    })
  }
}
