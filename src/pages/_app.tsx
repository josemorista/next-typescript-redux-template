import { ThemeProvider } from "styled-components";
import { wrapper } from "../redux";
import { GlobalStyles } from "../styles/global";
import { theme } from "../styles/theme";

function App({ Component, pageProps }: any) {
	return <>
		<GlobalStyles />
		<ThemeProvider theme={theme}>
			<Component {...pageProps} />
		</ThemeProvider>
	</>;
}

export default wrapper.withRedux(App);
