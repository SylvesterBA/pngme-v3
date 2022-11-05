import Link from "next/link";
import Image from "next/image";
import React from "react";
import { IBlogPost } from "../../types/blog";

export interface IBlogCardProps {
	post: IBlogPost;
	lastItem?: boolean;
}

const BlogCard = ({ post, lastItem }: IBlogCardProps) => (
	<Link href={`/blog/${post.slug}`}>
		<div
			className={`p-6 my-6 ${
				!lastItem ? "mr-6" : ""
			} font-pngme-inter bg-white flex flex-col text-left rounded drop-shadow-lg`}
			style={{ cursor: "pointer" }}
		>
			<div>
				<Image
					src={`https:${post.featuredImage.fields.file.url}` || ""}
					alt=""
					width={600}
					height={400}
				/>
			</div>
			<div className="grid grid-cols-2 content-center mb-4 mt-4">
				<div className="text-fs-14 font-semibold uppercase">
					{post.category}
				</div>
				<div className={"text-fs-16 text-right text-body-gray"}>
					{post.readDuration} min read
				</div>
			</div>
			<div className="text-fs-20 font-bold pb-6">{post.title}</div>
			<div className="text-fs-18 absolute left-6 bottom-3 text-primary-dark">
				{post.category}
			</div>
		</div>
	</Link>
);
export default BlogCard;
