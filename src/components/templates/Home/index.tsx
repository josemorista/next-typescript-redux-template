import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../../redux";
import { fetchProducts } from "../../../redux/products/reducer";
import { HomeStyles } from "./styles";

export const Home: FC = () => {

	const { highlights } = useSelector((state: AppState) => state.products);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchProducts("test"));
	}, [dispatch]);

	return <HomeStyles.Container>
		{highlights.map((el, i) => (<h1 key={i}>{el}</h1>))}
	</HomeStyles.Container>;
};