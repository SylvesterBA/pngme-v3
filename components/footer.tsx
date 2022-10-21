import Link from "next/link";
import React from "react";
import styles from "../styles/components/Footer.module.css";
import Image from "next/image";
import Card, { ETextFontSize } from "./card";

interface FooterProps {}

const Footer = ({ ...props }: FooterProps) => {
	return (
		<footer {...props}>
			<div className="bg-[url('/images/bg-pattern-full.svg')] bg-center bg-cover bg-no-repeat items-center justify-center p-12 sm:p-28">
				<Card
					buttonLabel="Sign up"
					topHeaderText="Want to get started?"
					topHeaderTextSize={ETextFontSize.thirtySix}
					midHeaderText="Test Pngme for free."
					midHeaderTextSize={ETextFontSize.sixty}
					buttonLink="#"
				/>
			</div>
			<div className="grid grid-cols-2 gap-4 pb-8 pt-20 place-items-center bg-primary-purple text-body-white">
				<div>
					<span className="text-fs-32 text-white">Pngme</span>
					<ul className="list-disc listBullets text-fs-14 text-body-white list-inside py-6">
						<li>Explore sample data & insights</li>
						<li>Query the API in a test enviroment</li>
						<li>Explore the Feature Library</li>
						<li>Test with up to 1,000 users for free</li>
						<li>Access API & SDK keys</li>
					</ul>
					<span className="inline-grid grid-cols-3 gap-4">
						<Link href={"https://www.facebook.com/pngme"}>
							<Image
								src="/icons/facebook.svg"
								alt="Facebook"
								height={24}
								width={24}
								className="cursor-pointer"
							/>
						</Link>
						<Link href={"https://www.linkedin.com/company/pngme"}>
							<Image
								src="/icons/linkedin.svg"
								alt="Facebook"
								height={24}
								width={24}
								className="cursor-pointer"
							/>
						</Link>
						<Link href={"https://twitter.com/pngmemobile"}>
							<Image
								src="/icons/twitter.svg"
								alt="Facebook"
								height={24}
								width={24}
								className="cursor-pointer"
							/>
						</Link>
					</span>
				</div>
				<div>TO DO</div>
				<div className={`text-fs-14 pt-20`}>
					© Copyright 2022 PNGME, Inc. All Rights Reserved.
				</div>
				<div className={`text-fs-14 pt-20`}>
					<span>
						<span className="cursor-pointer">
							<Link href={"/terms-of-service"}>Terms of Service</Link> |{" "}
						</span>
						<span className="cursor-pointer">
							<Link href={"/privacy"}>Privacy Policy</Link> |{" "}
						</span>
						<span className="cursor-pointer">
							<Link href={"/eula"}>End User License Agreement</Link>
						</span>
					</span>
				</div>
			</div>
		</footer>
	);
};
export default Footer;
