import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";

import { Product } from "../_models/product.model";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  private productsUrl = "https://api.restful-api.dev/objects";

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl);
  }
  createProduct(payload: Product): Observable<Product> {
    return this.http.post<Product>(this.productsUrl, payload);
  }

}