import styled from "styled-components";

const Container = styled.main`

	> div.hero {
		display: flex;
		justify-content: flex-end;
		align-items: center;

		min-height: 16rem;

		> h4 {
			color: white;
			max-width: 15rem;

			line-height: 3rem;

			word-wrap: break-word;

			text-shadow: 3px 4px 4px rgba(0, 0, 0, 0.75);
		}
	}

	> main {
		padding: 1rem;
	}

`;

export const HomeStyles = {
	Container
};