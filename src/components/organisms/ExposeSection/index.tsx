import { FC } from "react";
import { ExposeSectionStyles } from "./styles";

interface IExposeSectionProps {
	title: string;
}

export const ExposeSection: FC<IExposeSectionProps> = ({ children, title }) => {
	return <ExposeSectionStyles.Container>
		<header>
			<h6>
				{title}
			</h6>
			<span className="divider"></span>
		</header>
		<main>
			{children}
		</main>
	</ExposeSectionStyles.Container>;
};