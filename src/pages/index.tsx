import Head from "next/head";
import { Home } from "../components/templates/Home";

export default function HomePage() {
	return (
		<>
			<Head>
				<title>AgroMasc | Início</title>
			</Head>
			<Home></Home>
		</>
	);
}
