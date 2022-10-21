import type { NextPage } from "next";
import { useEffect, useState } from "react";
import CTAHome from "../components/ctaHome";
import Header from "../components/header";
import contentful from "../contentful";

const Home: NextPage = () => {
	const [headerContent, setHeaderContent] = useState(null);
	const [ctaContent, setCtaContent] = useState(null);

	useEffect(() => {
		contentful
			.getEntries({
				content_type: "sectionContent",
			})
			.then((entries: any) => {
				console.log("content type", entries);
				setHeaderContent(
					entries.items.filter(
						(item: any) => item.fields.contentLocation === "home-header"
					)[0]
				);
				setCtaContent(
					entries.items.filter(
						(item: any) => item.fields.contentLocation === "home-cta"
					)[0]
				);
			})
			.catch((error: any) => {
				console.error("error", error);
			});
	}, []);

	return (
		<div>
			{headerContent && ctaContent ? (
				<div>
					<Header content={headerContent} />
					<CTAHome content={ctaContent} />
				</div>
			) : null}
		</div>
	);
};

export default Home;
