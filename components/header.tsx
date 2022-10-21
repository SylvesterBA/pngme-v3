import React from "react";
import Button from "./button";
import styles from "../styles/components/Header.module.css";
import Link from "next/link";
import Image from "next/image";

interface HeaderProps {
	content: any;
}

const Header = ({ content }: HeaderProps) => (
	<header className="m-14">
		<div className="grid sm:grid-cols-1 md:grid-cols-12 gap-8 text-left flex items-center mb-2">
			<div className="text-fs-60 font-pngme-helvetica col-span-7">
				{`${content.fields.heading}`}
			</div>
			<div className="col-span-5">
				<div className="text-fs-18">{`${content.fields.subheading}`}</div>
				<span className="inline-grid grid-cols-2 gap-4 mt-5">
					<Link href={content.fields.defaultButton.fields.link}>
						<Button label={content.fields.defaultButton.fields.title} />
					</Link>
					{content.fields.secondaryButton && (
						<Link href={content.fields.secondaryButton.fields.link}>
							<Button
								type="outlined"
								label={content.fields.secondaryButton.fields.title}
							/>
						</Link>
					)}
				</span>
			</div>
		</div>
		<div className="grid grid-cols-1">
			<Image
				src="/images/quarter-circle.svg"
				alt=""
				className={`object-center ${styles.flipHorizontally}`}
				width={140}
				height={115}
			/>
		</div>
	</header>
);

export default Header;
