import { Dispatch } from "react";
import { ProductsActionsTypes, IGetHighlightsAction } from "./types";

export const getHighlights = () => async (dispatch: Dispatch<IGetHighlightsAction>) => {
	await (new Promise(resolve => setTimeout(resolve, 3000)));
	dispatch({
		type: ProductsActionsTypes.SET_HIGHLIGHTS,
		payload: [{
			name: "Test"
		}]
	});
};