import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../../redux";
import { getHighlights } from "../../../redux/products/creators";
import { HomeStyles } from "./styles";

export const Home: FC = () => {

	const highlights = useSelector((state: IRootState) => state.products.highlights);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getHighlights());
	}, [dispatch]);

	return <HomeStyles.Container>
		{highlights.map(el => <h1 key={el.name}>{el.name}</h1>)}
	</HomeStyles.Container>;
};