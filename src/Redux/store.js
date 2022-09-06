// NOTE: use this store variable to create a store.
import { legacy_createStore as createStore } from "redux";

import { reducer } from "./reducer";

export const store =createStore(reducer) ;

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.store = store;
}
