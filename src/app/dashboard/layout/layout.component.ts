import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-layout',
  template: `
    <div class="card bg-success text-white">
      <div class="card-header">
        <h2>Dashboard</h2>
      </div>
      <div class="card-body">
        <p>
          <a routerLink="home" class="btn btn-dark"> Home </a> |
          <a routerLink="admin" class="btn btn-dark"> Admin </a> |
          <button (click)="logout()" class="btn btn-danger"> Logout </button>
          <router-outlet></router-outlet> 
        </p>
      </div> 
    </div>
  `,
  styles: []
})
export class LayoutComponent implements OnInit {

  constructor(private _authService: AuthService) { }

  ngOnInit() {
  }

  logout() {
    this._authService.logout();
  }

}
