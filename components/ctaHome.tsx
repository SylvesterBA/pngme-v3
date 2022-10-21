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
		className={`bg-primary-beige bg-[url('/images/bg-pattern-half.svg')] bg-top bg-contain bg-no-repeat items-center justify-center p-12 sm:p-28`}
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
