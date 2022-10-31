import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import { ModalContextController } from "../contexts/ModalContextController";
import { Modal } from "../components/modal";

function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<ModalContextController>
				<Layout>
					<Component {...pageProps}/>
				</Layout>
			</ModalContextController>
		</>
	);
}

export default App;
