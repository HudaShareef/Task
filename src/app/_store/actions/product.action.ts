import { Action as NgrxAction } from "@ngrx/store";
import { Product } from "../../_models/product.model";

export enum ProductActionTypes {
  LOAD_PRODUCTS = "[Product] Load Products",
  LOAD_PRODUCTS_SUCCESS = "[Product] Load Products Success",
  LOAD_PRODUCTS_FAIL = "[Product] Load Products Fail",
  CREATE_PRODUCT = "[Product] Create Product",
  CREATE_PRODUCT_SUCCESS = "[Product] Create Product Success",
  CREATE_PRODUCT_FAIL = "[Product] Create Product Fail",
}

export class LoadProducts implements NgrxAction {
  readonly type = ProductActionTypes.LOAD_PRODUCTS;
}

export class LoadProductsSuccess implements NgrxAction {
  readonly type = ProductActionTypes.LOAD_PRODUCTS_SUCCESS;

  constructor(public payload: Product[]) {}
}

export class LoadProductsFail implements NgrxAction {
  readonly type = ProductActionTypes.LOAD_PRODUCTS_FAIL;

  constructor(public payload: string) {}
}

export class CreateProduct implements NgrxAction {
  readonly type = ProductActionTypes.CREATE_PRODUCT;

  constructor(public payload: Product) {}
}

export class CreateProductSuccess implements NgrxAction {
  readonly type = ProductActionTypes.CREATE_PRODUCT_SUCCESS;

  constructor(public payload: Product) {}
}

export class CreateProductFail implements NgrxAction {
  readonly type = ProductActionTypes.CREATE_PRODUCT_FAIL;

  constructor(public payload: string) {}
}


export type Action =
  | LoadProducts
  | LoadProductsSuccess
  | LoadProductsFail
  | CreateProduct
  | CreateProductSuccess
  | CreateProductFail
