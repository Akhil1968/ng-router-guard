import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  template: `
  <div class="card bg-secondary text-white">
    <div class="card-header">
      <h2>Login Page</h2>
    </div>
    <div class="card-body">
      <p>
        <button (click)="login()" class="btn btn-info">
          Normal User Log in 
        </button> |
        <button (click)="loginAdmin()" class="btn btn-info">
          Admin User Log in 
        </button> 
      </p>
    </div> 
  </div>
    
  `,
  styles: []
})
export class LoginComponent implements OnInit {

  constructor(private _authService: AuthService) { }

  ngOnInit() {
  }

  login() {
    this._authService.login();
  }

  loginAdmin() {
    this._authService.loginAdmin();
  }

}
