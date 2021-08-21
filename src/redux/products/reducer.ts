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
		case ProductsActionsTypes.GET_HIGHLIGHTS:
			return { ...state, highlights: [] };
		default:
			return state;
	}
};