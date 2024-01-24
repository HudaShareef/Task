import { Injectable } from "@angular/core";

import { Actions, createEffect, ofType } from "@ngrx/effects"; // Updated import statement
import { Action } from "@ngrx/store";

import { Observable, of } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";

import { ProductService } from "../../_services/product.service";
import * as productActions from "../actions/product.action";
import { Product } from "../../_models/product.model";

@Injectable()
export class ProductEffect {
  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {}

  loadProducts$: Observable<Action> = createEffect(() => 
  this.actions$.pipe(
    ofType<productActions.LoadProducts>(
      productActions.ProductActionTypes.LOAD_PRODUCTS
    ),
    mergeMap((action: productActions.LoadProducts) =>
      this.productService.getProducts().pipe(
        map(
          (products: Product[]) =>
            new productActions.LoadProductsSuccess(products)
        ),
        catchError(err => of(new productActions.LoadProductsFail(err)))
      )
    )
  )
  );
  
  createProduct$: Observable<Action> = createEffect(() =>
   this.actions$.pipe(
    ofType<productActions.CreateProduct>(
      productActions.ProductActionTypes.CREATE_PRODUCT
    ),
    map((action: productActions.CreateProduct) => action.payload),
    mergeMap((product: Product) =>
      this.productService.createProduct(product).pipe(
        map(
          (newProduct: Product) =>
            new productActions.CreateProductSuccess(newProduct)
        ),
        catchError(err => of(new productActions.CreateProductFail(err)))
      )
    )
   )
  );


}