import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { AppThunk } from "..";

interface IProductsState {
	highlights: Array<string>;
}

const initialState: IProductsState = {
	highlights: []
};

export const productsReducer = createSlice({
	name: "products",
	initialState,
	reducers: {
		setHighlights(state, action) {
			state.highlights = action.payload
		}
	},
	extraReducers: {
		[HYDRATE]: (state, action) => {
			console.log('HYDRATE', state, action.payload);
			return {
				...state,
				...action.payload.products,
			};
		},
	}
});

export const { setHighlights } = productsReducer.actions;

export const fetchProducts = (category: string): AppThunk => async dispatch => {
	await (new Promise(resolve => setTimeout(resolve, 3000)));
	dispatch(
		setHighlights([category]),
	);
};