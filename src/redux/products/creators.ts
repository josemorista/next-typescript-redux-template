import { Dispatch } from "react";
import { ProductsActionsTypes, IGetHighlightsAction } from "./types";

export const getHighlights = () => async (dispatch: Dispatch<IGetHighlightsAction>) => {
	dispatch({
		type: ProductsActionsTypes.GET_HIGHLIGHTS
	});
};