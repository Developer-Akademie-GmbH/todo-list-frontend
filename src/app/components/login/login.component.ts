import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  constructor(private as: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  async login() {

    try {
      let resp = await this.as.loginWithUsernameAndPassword(this.username, this.password);
      console.log(resp);
      this.router.navigateByUrl('/todos');
    } catch (e) {
      alert('Login fehlgeschlagen!');
      console.error(e);

    }
  }




}
