import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { LoginComponent } from "./login/login.component";

const appRoutes: Routes = [
  { path: "", component: LoginComponent },
  {
    path: "customers",
    loadChildren: () => import("../app/customers/customers.module").then(m => m.CustomersModule)
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}

