import { Component, OnInit ,Output, EventEmitter } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Store, State, select } from "@ngrx/store";
import * as productActions from "../../_store/actions/product.action";
import * as fromProduct from "../../_store/reducers/product.reducer";
import { Product } from "../../_models/product.model";

@Component({
  selector: "app-customer-add",
  templateUrl: "./product-add.component.html",
  styleUrls: ["./product-add.component.scss"]
})
export class ProductAddComponent implements OnInit {
  @Output() cancel: EventEmitter<void> = new EventEmitter<void>();
  onCancel() {
    this.cancel.emit();
  }
  productForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: Store<fromProduct.AppState>
  ) {}

  ngOnInit() {
    this.productForm = this.fb.group({
      name: ["", Validators.required],
      year: ["", Validators.required],
      price: ["", Validators.required],
      cpuModel: ["", Validators.required],
      hardDiskSize: ["", Validators.required]
    });
  }

  createProduct() {
    if (this.productForm.invalid) {
      return;
    }

    const newProduct: Product = {
      name: this.productForm.get("name")?.value || '',
      data: {
        year: this.productForm.get("year")?.value || 0,
        price: this.productForm.get("price")?.value || 0,
        CPUmodel: this.productForm.get("cpuModel")?.value || '',
        HardDiskSize: this.productForm.get("hardDiskSize")?.value || ''
      }
    };

    this.store.dispatch(new productActions.CreateProduct(newProduct));
    console.log(newProduct);

    this.productForm.reset();
  }
}