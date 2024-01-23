import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  logoUrl: string = "../../assets/JJK.png";
  constructor(private route: Router){
    
  }
  onLogout(){
    localStorage.removeItem('token');
    this.route.navigateByUrl('/auth/login');
  }
}
