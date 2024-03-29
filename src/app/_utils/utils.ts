import { StoreModule, ActionReducerMap } from "@ngrx/store";
import { Params, RouterStateSnapshot } from "@angular/router";
import {
  StoreRouterConnectingModule,
  routerReducer,
  RouterReducerState,
  RouterStateSerializer
} from "@ngrx/router-store";

export interface RouterStateUrl {
  url: string;
  params: Params;
  queryParams: Params;
}

export interface State {
  router: RouterReducerState<RouterStateUrl>;
}

export class CustomSerializer implements RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    let route = routerState.root;

    while (route.firstChild) {
      route = route.firstChild;
    }

    const {
      url,
      root: { queryParams }
    } = routerState;
    const { params } = route;
    return { url, params, queryParams };
  }
}

export const reducers: ActionReducerMap<State> = {
  router: routerReducer
};