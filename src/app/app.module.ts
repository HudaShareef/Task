import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule ,HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import {
  StoreRouterConnectingModule,
  routerReducer,
  RouterStateSerializer
} from "@ngrx/router-store";

import { CustomSerializer } from "./_utils/utils";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";


import { fakeBackendProvider } from './_authentication/fake-backend';
import { BasicAuthInterceptor } from './_authentication/basic-auth.interceptor';
import { ErrorInterceptor } from './_authentication/error.interceptor';

@NgModule({
  declarations: [AppComponent, LoginComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      router: routerReducer
    }),
    StoreRouterConnectingModule.forRoot({ stateKey: "router" }),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([]),
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule,
    ReactiveFormsModule,

  ],
  providers: [{ provide: RouterStateSerializer, useClass: CustomSerializer },
  { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
   fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}