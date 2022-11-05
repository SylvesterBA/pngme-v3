import Link from "next/link";
import React from "react";
import styles from "../styles/components/CTA.module.css";
import Button from "./button";
import Card, { ETextFontSize } from "./card";

interface HeaderProps {
	content: any;
}

const CTAHome = ({ content, ...props }: HeaderProps) => (
	<div
		className={`bg-secondary-beige bg-[url('/images/bg-pattern-half.svg')] bg-top bg-contain bg-no-repeat items-center justify-center pt-4 pl-4 pr-4 sm:pt-12 sm:pl-12 sm:pr-12`}
		{...props}
	>
		<Card
			buttonLabel={content.fields.defaultButton.fields.title}
			topHeaderText={content.fields.heading}
			topHeaderTextSize={ETextFontSize.fortyFour}
			midHeaderText={content.fields.subheading}
			midHeaderTextSize={ETextFontSize.eighteen}
			buttonLink={content.fields.defaultButton.fields.link}
			showPartners
		/>
	</div>
);

export default CTAHome;