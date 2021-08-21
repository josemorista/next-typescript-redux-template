import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../../redux";
import { getHighlights } from "../../../redux/products/creators";
import { ExposeSection } from "../../organisms/ExposeSection";
import { RootHeader } from "../../organisms/RootHeader";
import { HomeStyles } from "./styles";

export const Home: FC = () => {

	const highlights = useSelector((state: IRootState) => state.products.highlights);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getHighlights());
	}, [dispatch]);

	return <HomeStyles.Container>
		<RootHeader />
		<div className="hero">
			<h4>
				Otimize seus custos fazendo boas compras
			</h4>
		</div>
		{highlights.map(el => <h1 key={el.name}>{el.name}</h1>)}
		<main>
			<ExposeSection title="Mais vendidos">
				<div>
				</div>
			</ExposeSection>
		</main>
	</HomeStyles.Container>;
};