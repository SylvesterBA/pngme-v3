import Link from "next/link";
import React, { useState } from "react";
import Button from "./button";
import Image from 'next/image'

interface NavbarProps {
	backgroundColor?: string;
	buttonLink?: string;
	buttonLabel?: string;
}

enum ENavbarPageLinks {
	products = "Products",
	about = "About",
	careers = "Careers",
	pricing = "Pricing",
	developers = "Developers",
	blog = "Blog",
}

const NavBarLinks = (
	{ containerStyles, elementStyles, onSelect }: 
	{ containerStyles: string, elementStyles?: string, onSelect?: () => void }
) => (
	<div className={containerStyles}>
		{(Object.keys(ENavbarPageLinks) as (keyof typeof ENavbarPageLinks)[]).map(
			(page, index) => {
				return (
					<Link href={page} key={index}>
						<a onClick={() => onSelect && onSelect()} className={`ml-4 mr-4 font-semibold ${elementStyles}`}>{ENavbarPageLinks[page]}</a>
					</Link>
				);
			}
		)}
	</div>
);

const Navbar = ({
	backgroundColor,
	buttonLabel,
	buttonLink,
	...props
}: NavbarProps) => {
	const [showMobileNavbar, setShowMobileNavbar] = useState<boolean>(false)

	return (
		<nav
			className="bg-white flex justify-between items-center p-8 3xl:px-40 relative"
			style={{ backgroundColor }}
			{...props}
		>
			<Link href="/">
				<div className="text-left col-span-2 text-black font-bold text-fs-32 cursor-pointer">
					Pngme
				</div>
			</Link>

			<NavBarLinks containerStyles="hidden md:flex" elementStyles="xl:text-xl font-normal xl:px-4"/>

			<div className="hidden md:flex text-right">
				<Link href="https://admin.pngme.com">
					<Button type='secondary' label={buttonLabel || "Login"} additionalStyles="px-9 py-3 xl:px-20 xl:py-4" />
				</Link>
			</div>

			<div className="md:hidden px-5 flex py-2" onClick={() => setShowMobileNavbar(!showMobileNavbar)}>
				<Image src="/icons/burger-menu.svg" alt="burgerMenu" width={30} height={30} />
			</div>

			{showMobileNavbar && (
				<div className="absolute bg-white left-2 right-2 top-32 justify-center align-middle pt-5 pb-10 boxshadow z-10 z-40">
					<NavBarLinks
						containerStyles="flex flex-col h-full items-center text-fs-22"
						elementStyles="py-4"
						onSelect={() => setShowMobileNavbar(false)}
					/>

					<div className="flex text-right justify-center mt-6">
						<Link href="https://admin.pngme.com">
							<Button type='secondary' label={buttonLabel || "Login"} additionalStyles="px-20 py-4" />
						</Link>
					</div>
				</div>
			)}
		</nav>
	);
}; 
export default Navbar;
