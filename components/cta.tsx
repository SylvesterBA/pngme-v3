import Link from "next/link";
import React from "react";
import styles from "../styles/components/CTA.module.css";
import Button from "./button";
import Card, { CardProps } from "./card";

export enum EBackgroundImageSize {
	half = "half",
	full = "full",
}
interface CTAProps {
	backgroundImageSize?: EBackgroundImageSize;
}

const CTA = ({
	backgroundImageSize = EBackgroundImageSize.full,
	...props
}: CTAProps) => {
	const bgImageStyle =
		backgroundImageSize === EBackgroundImageSize.full
			? "bg-[url('/images/bg-pattern-full.svg')] bg-center bg-cover bg-no-repeat"
			: "bg-[url('/images/bg-pattern-half.svg')] bg-top bg-contain bg-no-repeat";
	return (
		<div
			className={`${bgImageStyle} items-center justify-center p-12 sm:p-28`}
			{...props}
		>
			<Card
				buttonLabel="Sign up"
				topHeaderText="Want to get started?"
				midHeaderText="Test Pngme for free."
				buttonLink="#"
			/>
		</div>
	);
};
export default CTA;
