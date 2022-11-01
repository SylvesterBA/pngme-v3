import Footer from "./footer";
import Navbar from "./navbar";
import { FunctionComponent, PropsWithChildren } from "react";
import CTA from "./cta";
import { Modal } from "./modal";

export interface ILayoutProps extends PropsWithChildren {}

const Layout: FunctionComponent<ILayoutProps> = ({ children }) => {
	return (
		<div className="font-pngme-inter text-primary-purple bg-secondary-beige relative">
			<Navbar />
			<Modal />
			{children}
			<Footer />
		</div>
	);
};

export default Layout;
