import Link from "next/link";
import React from "react";
import Button from "./button";

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

const NavBarLinks = () => (
	<div className="col-span-8 text-center">
		{(Object.keys(ENavbarPageLinks) as (keyof typeof ENavbarPageLinks)[]).map(
			(page, index) => {
				return (
					<Link href={page} key={index}>
						<a className="ml-4 mr-4 font-semibold">{ENavbarPageLinks[page]}</a>
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
	return (
		<nav
			className="bg-white grid grid-cols-12 items-center pt-9 pb-9 pl-20 pr-20"
			style={{ backgroundColor }}
			{...props}
		>
			<Link href="/">
				<div className="text-left col-span-2 text-black font-bold text-fs-32 cursor-pointer">
					Pngme
				</div>
			</Link>
			<NavBarLinks />
			<div className="navbar-button col-span-2 text-right">
				<Link href="https://admin.pngme.com">
					<Button type='secondary' label={buttonLabel || "Login"} />
				</Link>
			</div>
		</nav>
	);
};
export default Navbar;
