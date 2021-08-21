import { createStore, applyMiddleware, Action } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import { reducers } from "./reducers";
import { createWrapper, HYDRATE } from "next-redux-wrapper";

export interface IHydrateAction extends Action {
	type: typeof HYDRATE;
	payload: any;
}

export type IRootState = ReturnType<typeof reducers>;

const initStore = (initialState: any) => {
	return createStore(reducers, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)));
};

export const storeWrapper = createWrapper(initStore, { debug: false });