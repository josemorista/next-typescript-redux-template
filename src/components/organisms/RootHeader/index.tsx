import { CartButton } from "../../atoms/CartButton";
import { Input } from "../../atoms/Input";
import { MenuButton } from "../../atoms/MenuButton";
import { RootHeaderStyles } from "./styles";

export const RootHeader = () => {
	return <RootHeaderStyles.Container>
		<img src="/img/svg/logo.svg" alt="logo" />
		<Input textAlign="left" placeholder="O que você está procurando?" />
		<CartButton />
		<MenuButton />
	</RootHeaderStyles.Container>;
};