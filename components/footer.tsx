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
			<div className="grid md:grid-cols-2 gap-4 pb-8 pt-20 px-10 sm:px-32 md:px-20 place-items-center bg-primary-purple text-body-white">
				<div className="w-full h-full">
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

				<div className="h-full w-full flex flex-col lg:flex-row lg:justify-between ">
					<div className="flex flex-row mb-8 lg:mb-0 justify-between lg:w-2/3 lg:justify-evenly">
						<section className="flex flex-col justify-between">
							<span className="text-fs-22 font-bold text-white">Quick Links</span>
							<a className="leading-loose text-fs-14">Home</a>
							<a className="leading-loose text-fs-14">Careers</a>
							<a className="leading-loose text-fs-14">Team</a>
							<a className="leading-loose text-fs-14">Developers</a>
							<a className="leading-loose text-fs-14">Blog</a>
						</section>

						<section className="flex flex-col justify-between pr-16 lg:pr-0">
							<span className="text-fs-22 font-bold text-white">Products</span>
							<a className="leading-loose text-fs-14">Product One</a>
							<a className="leading-loose text-fs-14">Product Two</a>
							<a className="leading-loose text-fs-14">Product Three</a>
							<a className="leading-loose text-fs-14">Product Four</a>
							<a className="leading-loose text-fs-14">Product Five</a>
						</section>
					</div>

					<section className="flex flex-col">
						<span className="text-fs-22 font-bold text-white">Reach us</span>
						<div className="flex leading-10 mt-2">
							<Image src="/icons/mail.svg" alt="mail" width={25} height={25}/>	
							<a href="mailto:hello@pngme.com" className="pl-2">hello@pngme.com</a>
						</div>
						<div className="flex leading-10">
							<Image src="/icons/phone.svg" alt="mail" width={25} height={25}/>	
							<span className="pl-2">+1 888 234 5678</span>
						</div>
					</section>
				</div>

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
