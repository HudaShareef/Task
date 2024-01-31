import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { LoginComponent } from "./login/login.component";
import { AuthGuard } from "./_authentication/auth.guard";

const appRoutes: Routes = [
  { path: 'products', loadChildren: () => import("./products/products.module").then(m => m.ProductsModule), canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: "", redirectTo: "/products", pathMatch: "full" }, 
  { path: "**", redirectTo: "/products" }
];
@NgModule({
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}

