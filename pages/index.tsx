import type { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import BlogCard from "../components/blog/blogCard";
import CreditLending from "../components/creditLending";
import CTAHome from "../components/ctaHome";
import DeveloperTools from "../components/developerTools";
import Header from "../components/header";
import contentful from "../contentful";
import { IBlogPost } from "../types/blog";
import Carousel from "../components/carousel";
import PartnerComments from "../components/partnerComments";

const Home: NextPage = () => {
	const [headerContent, setHeaderContent] = useState(null);
	const [ctaContent, setCtaContent] = useState(null);
	const [blogPosts, setBlogPosts] = useState<Array<IBlogPost>>([]);

	useEffect(() => {
		contentful
			.getEntries({
				content_type: "sectionContent",
			})
			.then((entries: any) => {
				console.log("content type sectionContent", entries);
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
				console.error("error", error); // TODO: hande
			});
		contentful
			.getEntries({
				content_type: "blogPost",
				order: "-sys.createdAt",
				limit: 100,
			})
			.then((entries: any) => {
				const maxThreePosts: Array<IBlogPost> = [];
				for (let i = 0; i < entries.items.length; i++) {
					maxThreePosts.push(entries.items[i].fields);
					if (i === 2) {
						break;
					}
				}
				setBlogPosts(maxThreePosts);
			})
			.catch((error: any) => {
				console.error("error", error); // TODO: hande
			});
	}, []);
	useEffect(() => {
		console.log("blogPosts", blogPosts);
	}, [blogPosts]);

	return (
		<div>
			<div>
				{headerContent && <Header content={headerContent} />}
				{ctaContent && <CTAHome content={ctaContent} />}
				<DeveloperTools />
				<PartnerComments />
				<CreditLending />
				{blogPosts && (
					<div className={`bg-secondary-beige p-12`}>
						<div className="grid grid-cols-2 content-center">
							<div className="text-fs-36">Learn more about Pngme</div>
							<div
								className={
									"invisible md:visible text-fs-18 underline text-primary-pink font-bold text-right self-center"
								}
							>
								<Link href={"/blog"}>See more</Link>
							</div>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-3">
							{blogPosts.map((post, index) => (
								<BlogCard
									post={post}
									lastItem={blogPosts.length === index + 1 ? true : false}
									key={index}
								/>
							))}
						</div>
						<div
							className={
								"md:invisible text-fs-18 underline text-primary-pink font-bold"
							}
						>
							<Link href={"/blog"}>See more</Link>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Home;
