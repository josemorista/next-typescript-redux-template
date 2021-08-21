import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		outline: 0;
		box-shadow: none;

		font-size: 62.5%;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}

	span,p,div,button,textarea {
		font-size: 1.6rem;
	}

	h1 {
		font-size: 4.2rem;
	}

	h2 {
		font-size: 3.6rem;
	}

	h3 {
		font-size: 3rem;
	}

	h4 {
		font-size: 2.4rem;
	}

	h5 {
		font-size: 2rem;
	}

	h6 {
		font-size: 1.8rem;
	}

	input {
		font-size: 1.4rem;
	}

	button {
		cursor: pointer;
	}

`;