import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  onSubmit() {
    // Here you can implement authentication logic
    console.log('Login submitted:', this.username, this.password);
    // Add your authentication logic here (e.g., make an API call)
  }
}
