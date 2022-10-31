/* eslint-disable react-hooks/exhaustive-deps */
import type { NextPage } from "next";
import styles from "../../styles/pages/Blog.module.css";
import contentful from "../../contentful";
import { useEffect, useState } from "react";
import BlogHeader from "../../components/blog/blogHeader";
import Image from "next/image";
import { IBlogPost } from "../../types/blog";

const Blog: NextPage = () => {
	const [blogPosts, setBlogPosts] = useState<Array<IBlogPost>>([]);
	const [categories, setCategories] = useState<Array<string>>([]);
	// const [latestPosts, setLatestPosts] = useState([]);

	useEffect(() => {
		contentful
			.getEntries({
				content_type: "blogPost",
				order: "-sys.createdAt",
				limit: 100,
			})
			.then((entries: any) => {
				setBlogPosts(entries.items.map((item: any) => item.fields));
			})
			.catch((error: any) => {
				console.error("error", error); // TODO: hande
			});
	}, []);

	useEffect(() => {
		if (blogPosts.length) {
			setCategories(blogPosts.map((post) => post.category));
		}
		console.log("blogPosts", blogPosts);
		console.log("categories", categories);
	}, [blogPosts]);

	// header
	// sidebar
	// blog cards
	// podcast

	return (
		<div>
			<BlogHeader posts={blogPosts} />
			<div className="text-primary-dark p-8">
				<div className="uppercase text-primary-pink col-span-12 md:col-span-2">
					Browse by topic
				</div>
				<div className="underline font-bold col-span-12 md:col-span-2">
					All categories
				</div>
				{categories.length ? (
					<ul>
						{categories.map((category) => (
							<li key={category}>{category}</li>
						))}
					</ul>
				) : null}
				<label className="relative block">
					<span className="absolute inset-y-0 left-0 flex items-center pl-2">
						<Image
							src="/icons/search.svg"
							alt=""
							className={`object-center`}
							height="18"
							width="18"
						/>
					</span>
					<input
						className="placeholder:text-slate-400 block bg-white border-8 border-pink-light rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none sm:text-sm"
						placeholder="Search here"
						type="text"
						name="search"
					/>
				</label>
				<div className="underline font-bold col-span-12 md:col-span-2">
					Explore more
				</div>
				<ul>
					<li key={1}>African Financial Data Insights Handbook</li>
					<li key={2}>Guide to lorem</li>
				</ul>
				<div className="underline font-bold col-span-12 md:col-span-2">
					Follow us in Socials
				</div>
				<span></span>
			</div>

			<h2 className={styles.headingBold}>Read our latest blog</h2>
			{/*  {blogPosts.length ?
        blogPosts.map((post: any) => {
          return (
            <div key={post.fields.slug}>
              <p>slug: {post.fields.slug}</p>
              <p>author: {post.fields.author}</p>
              <p>slug: {post.fields.slug}</p>
              <p>slug: {post.fields.slug}</p>
              <p>slug: {post.fields.slug}</p>
              <p>slug: {post.fields.slug}</p>
            </div>
          )


        }) : null
      } */}
		</div>
	);
};

export default Blog;
