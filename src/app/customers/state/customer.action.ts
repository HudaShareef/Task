import { Action as NgrxAction } from "@ngrx/store";
import { Customer } from "../customer.model";

export enum CustomerActionTypes {
  LOAD_CUSTOMERS = "[Customer] Load Customers",
  LOAD_CUSTOMERS_SUCCESS = "[Customer] Load Customers Success",
  LOAD_CUSTOMERS_FAIL = "[Customer] Load Customers Fail",
  // LOAD_CUSTOMER = "[Customer] Load Customer",
  // LOAD_CUSTOMER_SUCCESS = "[Customer] Load Customer Success",
  // LOAD_CUSTOMER_FAIL = "[Customer] Load Customer Fail",
  CREATE_CUSTOMER = "[Customer] Create Customer",
  CREATE_CUSTOMER_SUCCESS = "[Customer] Create Customer Success",
  CREATE_CUSTOMER_FAIL = "[Customer] Create Customer Fail",
}

export class LoadCustomers implements NgrxAction {
  readonly type = CustomerActionTypes.LOAD_CUSTOMERS;
}

export class LoadCustomersSuccess implements NgrxAction {
  readonly type = CustomerActionTypes.LOAD_CUSTOMERS_SUCCESS;

  constructor(public payload: Customer[]) {}
}

export class LoadCustomersFail implements NgrxAction {
  readonly type = CustomerActionTypes.LOAD_CUSTOMERS_FAIL;

  constructor(public payload: string) {}
}

// export class LoadCustomer implements NgrxAction {
//   readonly type = CustomerActionTypes.LOAD_CUSTOMER;

//   constructor(public payload: number) {}
// }

// export class LoadCustomerSuccess implements NgrxAction {
//   readonly type = CustomerActionTypes.LOAD_CUSTOMER_SUCCESS;

//   constructor(public payload: Customer) {}
// }

// export class LoadCustomerFail implements NgrxAction {
//   readonly type = CustomerActionTypes.LOAD_CUSTOMER_FAIL;

//   constructor(public payload: string) {}
// }

export class CreateCustomer implements NgrxAction {
  readonly type = CustomerActionTypes.CREATE_CUSTOMER;

  constructor(public payload: Customer) {}
}

export class CreateCustomerSuccess implements NgrxAction {
  readonly type = CustomerActionTypes.CREATE_CUSTOMER_SUCCESS;

  constructor(public payload: Customer) {}
}

export class CreateCustomerFail implements NgrxAction {
  readonly type = CustomerActionTypes.CREATE_CUSTOMER_FAIL;

  constructor(public payload: string) {}
}


export type Action =
  | LoadCustomers
  | LoadCustomersSuccess
  | LoadCustomersFail
  // | LoadCustomer
  // | LoadCustomerSuccess
  // | LoadCustomerFail
  | CreateCustomer
  | CreateCustomerSuccess
  | CreateCustomerFail
