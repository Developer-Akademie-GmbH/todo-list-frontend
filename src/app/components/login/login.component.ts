import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  constructor(private as: AuthService) { }

  ngOnInit(): void {
  }

  async login() {

    try {
      let resp = await this.as.loginWithUsernameAndPassword(this.username, this.password);
      console.log(resp);
      // TODO: Redirect
    } catch (e) {
      // Show error message
      console.error(e);

    }
  }




}
