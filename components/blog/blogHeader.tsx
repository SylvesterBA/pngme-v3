/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
// import Button from "./button";
// import styles from "../styles/components/Header.module.css";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { IBlogPost } from "../../types/blog";

interface IBlogHeaderProps {
	posts: Array<IBlogPost>;
}

const BlogHeader = ({ posts }: IBlogHeaderProps) => {
	console.log("posts", posts);

	const [mainArticle, setMainArticle] = useState<null | any>(null);
	const [listArticles, setListArticles] = useState<Array<IBlogPost>>([]);

	useEffect(() => {
		if (posts.length) {
			setMainArticle(posts[0]);
			setListArticles(posts.filter((_post, index) => index < 2));
		}
	}, [posts]);

	return (
		<header className="lg:bg-[url('/images/bg-p-rect-y-tri-sides.svg')] lg:bg-center bg-no-repeat bg-cover">
			{mainArticle ? (
				<div className="grid grid-cols-3 p-16">
					<div className="col-span-2">
						<Image
							src={`https:${posts[0].featuredImage.fields.file.url}`}
							alt={posts[0].featuredImage.fields.description}
							className={`object-center`}
							height={350}
							width={520}
						/>
					</div>
					<div>
						<div className="text-fs-32">Read our latest blog</div>
						<div>Suspendisse varius enim in eros elementum</div>
						<div className={"divide-y mt-12"}>
							{listArticles.map((article, index) => (
								<div key={index} className={"pt-5 pb-5"}>
									<div className="uppercase text-primary-pink">
										{article.category} - {article.readDuration}{" "}
										min read
									</div>
									<div>{article.title}</div>
								</div>
							))}
						</div>
					</div>
				</div>
			) : null}
		</header>
	);
};

export default BlogHeader;
