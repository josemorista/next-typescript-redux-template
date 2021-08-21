import { FC } from "react";
import { IProduct } from "../../../domain/modules/products/entities/IProduct";

interface IProductCardProps {
	product: IProduct;
}

export const ProductCard: FC<IProductCardProps> = ({ product }) => {
	return <li>
		<img src="" alt="" />
		<h6>{product.name}</h6>
	</li>;
};