import { Component, OnInit } from "@angular/core";

import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";

import * as productActions from "../../_store/actions/product.action";
import * as fromProduct from "../../_store/reducers/product.reducer";
import { Product } from "../../_models/product.model";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})

export class ProductListComponent implements OnInit {
  products$!: Observable<Product[]>;
  error$!: Observable<String>;

  constructor(private store: Store<fromProduct.AppState>) {}

  ngOnInit() {
    this.store.dispatch(new productActions.LoadProducts());
    this.products$ = this.store.pipe(select(fromProduct.getProducts));
    this.error$ = this.store.pipe(select(fromProduct.getError));
  }


}