import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { EffectsModule, Actions } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";

import { productReducer } from "../_store/reducers/product.reducer";
import { ProductEffect } from "../_store/effects/product.effects";

import { ProductComponent } from "./product/product.component";
import { ProductAddComponent } from "./product-add/product-add.component";
 import { ProductListComponent } from "./product-list/product-list.component";
import { ProductCardComponent } from './product-card/product-card.component';

const productRoutes: Routes = [{ path: "", component: ProductComponent }];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(productRoutes),
    StoreModule.forFeature("products", productReducer),
    EffectsModule.forFeature([ProductEffect])
  ],
  declarations: [
    ProductComponent,
    ProductAddComponent,
    ProductListComponent,
    ProductCardComponent
  ]
})
export class ProductsModule {}