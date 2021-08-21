import { FC } from "react";
import { ExposeSection } from "../../organisms/ExposeSection";
import { RootHeader } from "../../organisms/RootHeader";
import { HomeStyles } from "./styles";

export const Home: FC = () => {
	return <HomeStyles.Container>
		<RootHeader />
		<div className="hero">
			<h4>
				Otimize seus custos fazendo boas compras
			</h4>
		</div>
		<main>
			<ExposeSection title="Mais vendidos">
				<div>
				</div>
			</ExposeSection>
		</main>
	</HomeStyles.Container>;
};