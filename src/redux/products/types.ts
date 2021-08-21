import { IHydrateAction } from "..";

export enum ProductsActionsTypes {
	GET_HIGHLIGHTS = "[products] get highlights"
}

export interface IGetHighlightsAction {
	type: ProductsActionsTypes.GET_HIGHLIGHTS;
}

export type IProductsAction = IGetHighlightsAction | IHydrateAction;