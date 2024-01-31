import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../_services/authentication.service';
import { User } from '../../_models/user.model';
@Component({
  selector: 'app-customer',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  isFormOpen: boolean = false;

  toggleForm() {
    this.isFormOpen = !this.isFormOpen;
  }

  user!: User;

  constructor(
      private router: Router,
      private authenticationService: AuthenticationService
  ) {
      this.authenticationService.user.subscribe(x => this.user = x);
  }

  
  logout() {
    this.authenticationService.logout();
}
}
