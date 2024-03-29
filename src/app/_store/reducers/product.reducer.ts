
import * as productActions from "../actions/product.action";
import { createFeatureSelector, createSelector } from "@ngrx/store";

import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";

import { Product } from "../../_models/product.model";
import * as fromRoot from "../states/app-state";

export interface ProductState extends EntityState<Product> {
  selectedProductId: number | null;
  loading: boolean;
  loaded: boolean;
  error: string;
}

export interface AppState extends fromRoot.AppState {
  products: ProductState;
}

export const productAdapter: EntityAdapter<Product> = createEntityAdapter<Product>();

export const defaultProduct: ProductState = {
  ids: [],
  entities: {},
  selectedProductId: null,
  loading: false,
  loaded: false,
  error: ""
};

export const initialState = productAdapter.getInitialState(defaultProduct);

export function productReducer(
  state = initialState,
  action: productActions.Action
): ProductState {
  switch (action.type) {
    case productActions.ProductActionTypes.LOAD_PRODUCTS_SUCCESS: {
      return productAdapter.setAll(action.payload, {
        ...state,
        loading: false,
        loaded: true
      });
    }
    case productActions.ProductActionTypes.LOAD_PRODUCTS_FAIL: {
      return {
        ...state,
        entities: {},
        loading: false,
        loaded: false,
        error: action.payload

      };
    }


    case productActions.ProductActionTypes.CREATE_PRODUCT_SUCCESS: {
      return productAdapter.addOne(action.payload, state);
    }
    case productActions.ProductActionTypes.CREATE_PRODUCT_FAIL: {
      return {
        ...state,
        error: action.payload
      };
    }


    default: {
      return state;
    }
  }
}

const getProductFeatureState = createFeatureSelector<ProductState>(
  "products"
);

export const getProducts = createSelector(
  getProductFeatureState,
  productAdapter.getSelectors().selectAll
);

export const getProductsLoading = createSelector(
  getProductFeatureState,
  (state: ProductState) => state.loading
);

export const getProductsLoaded = createSelector(
  getProductFeatureState,
  (state: ProductState) => state.loaded
);

export const getError = createSelector(
  getProductFeatureState,
  (state: ProductState) => state.error
);

export const getCurrentProductId = createSelector(
  getProductFeatureState,
  (state: ProductState) => state.selectedProductId
);
export const getCurrentProduct = createSelector(
  getProductFeatureState,
  getCurrentProductId,
  state => state.entities[state.selectedProductId!]
);