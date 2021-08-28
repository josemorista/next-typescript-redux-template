import { IProduct } from "../../domain/modules/products/entities/IProduct";
import { HYDRATE } from "next-redux-wrapper";
import { IProductsAction, ProductsActionsTypes } from "./types";

interface IProductsState {
	highlights: Array<IProduct>;
}

const initialState = {
	highlights: []
};

export const productsReducer = (state: IProductsState = initialState, action: IProductsAction): IProductsState => {
	switch (action.type) {
		case HYDRATE:
			return { ...state, ...action.payload.products };
		case ProductsActionsTypes.SET_HIGHLIGHTS:
			return { ...state, highlights: action.payload };
		default:
			return state;
	}
};