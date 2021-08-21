import { combineReducers } from "redux";
import { productsReducer } from "./products/reducer";

const reducers = combineReducers({
	products: productsReducer
});

export {
	reducers
};