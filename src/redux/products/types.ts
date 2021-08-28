import { IHydrateAction } from "..";
import { IProduct } from "../../domain/modules/products/entities/IProduct";

export enum ProductsActionsTypes {
	SET_HIGHLIGHTS = "[products] set highlights"
}

export interface IGetHighlightsAction {
	type: ProductsActionsTypes.SET_HIGHLIGHTS;
	payload: Array<IProduct>;
}

export type IProductsAction = IGetHighlightsAction | IHydrateAction;