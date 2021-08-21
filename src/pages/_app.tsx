import { ThemeProvider } from "styled-components";
import { storeWrapper } from "../redux";
import { GlobalStyles } from "../styles/global";
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }: any) {
	return <>
		<GlobalStyles />
		<ThemeProvider theme={theme}>
			<Component {...pageProps} />
		</ThemeProvider>
	</>;
}

export default storeWrapper.withRedux(MyApp);
