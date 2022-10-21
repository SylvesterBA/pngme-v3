import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Card, { ETextFontSize } from "../components/card";
import CTAHome from "../components/ctaHome";
import Header from "../components/header";
import contentful from "../contentful";

const About: NextPage = () => {
	const [headerContent, setHeaderContent] = useState<any | null>(null);
	const [ctaContent, setCtaContent] = useState<any | null>(null);

	useEffect(() => {
		contentful
			.getEntries({
				content_type: "sectionContent",
			})
			.then((entries: any) => {
				console.log("content type", entries);
				setHeaderContent(
					entries.items.filter(
						(item: any) => item.fields.contentLocation === "about-header"
					)[0]
				);
				setCtaContent(
					entries.items.filter(
						(item: any) => item.fields.contentLocation === "about-cta"
					)[0]
				);
			})
			.catch((error: any) => {
				console.error("error", error);
			});
	}, []);

	useEffect(() => {
		console.log("headerContent", headerContent);
		console.log("ctaContent", ctaContent);
	}, [ctaContent, headerContent]);

	return (
		<div>
			{headerContent && ctaContent ? (
				<div className="bg-white">
					<div
						className={`
					py-24 px-48
					bg-[url('/images/bg-team.svg'),_url('/images/pink-triangle.svg')]
					bg-[position:bottom,_top_left]
					bg-no-repeat
					bg-[length:contain,150px]
					

					`}
					>
						<div className="sm:mb-32">
							<Card
								categoryText="About us"
								categoryTextSize={ETextFontSize.sixteen}
								buttonLabel={headerContent.fields.defaultButton.fields.title}
								buttonLink={headerContent.fields.defaultButton.fields.link}
								topHeaderText={headerContent.fields.heading}
								topHeaderTextSize={ETextFontSize.fortyFour}
								midHeaderText={headerContent.fields.subheading}
								midHeaderTextSize={ETextFontSize.sixteen}
								removePadding={true}
							/>
						</div>
					</div>
					{/*<CTAHome content={ctaContent} /> */}
				</div>
			) : null}
		</div>
	);
};

export default About;
