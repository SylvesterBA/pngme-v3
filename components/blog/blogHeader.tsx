/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
// import Button from "./button";
// import styles from "../styles/components/Header.module.css";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

interface IBlogPost {
	fields: IBlogPostFields;
	metadata: any;
	sys: any;
}
interface IBlogPostFields {
	author: string;
	body: any;
	category: string;
	extract: string;
	featuredImage: {
		fields: {
			description: string;
			file: {
				contentType: string;
				details: any;
				fileName: string;
				url: string;
			};
			title: string;
		};
	};
	postCreatedAt: string;
	readDuration: string;
	slug: string;
	title: string;
}

interface IBlogHeaderProps {
	posts: Array<IBlogPost>;
}

/* <div className="bg-[url('/images/bg-pattern-full.svg')] bg-center bg-cover bg-no-repeat items-center justify-center p-12 sm:p-28">
 */ /*  */

const BlogHeader = ({ posts }: IBlogHeaderProps) => {
	console.log("posts", posts);

	const [mainArticle, setMainArticle] = useState<null | any>(null);
	const [listArticles, setListArticles] = useState<Array<IBlogPost>>([]);

	useEffect(() => {
		if (posts.length) {
			setMainArticle(posts[0].fields);
			setListArticles(posts.filter((_post, index) => index < 2));
		}
	}, [posts]);

	return (
		<header className="bg-[url('/images/bg-yellow-triangle.svg'),_url('/images/bg-purple-rectangle.svg')] bg-[position:top_right,_left] bg-no-repeat sm:bg-[length:20%,_40%] md:bg-[length:10%,_20%]">
			{mainArticle ? (
				<div className="grid grid-cols-3 p-16">
					<div className="col-span-2">
						<Image
							src={`https:${posts[0].fields.featuredImage.fields.file.url}`}
							alt={posts[0].fields.featuredImage.fields.description}
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
								<div key={index} className={"pt-5 pb-5"} >
									<div className="uppercase text-primary-pink">
										{article.fields.category} - {article.fields.readDuration}{" "}
										min read
									</div>
									<div>{article.fields.title}</div>
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
