import { Component } from '@angular/core';

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
}
