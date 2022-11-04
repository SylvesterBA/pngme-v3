/* import Link from "next/link"; */
import Image from "next/image";
import React from "react";

export interface IDevToolsCardProps {
	heading: string;
	subheading: string;
	imageSrc: string;
	isTopCard?: boolean;
}

const DevToolsCard = ({
	heading,
	subheading,
	imageSrc,
	isTopCard,
}: IDevToolsCardProps) => {
	return (
		<div
			className={`
				m-2 
				p-2 
				lg:p-4 
				lg:m-6 
				font-pngme-inter 
				bg-white 
				flex 
				flex-col 
				text-center 
				rounded 
				drop-shadow-lg
				${isTopCard ? "absolute -right-1/2 -top-1/3 w-full" : ""}
				`}
		>
			<div className="m-2 lg:m-4">
				<Image src={imageSrc || ""} alt="" width={500} height={400} />
			</div>
			<div className="pl-2 pr-2 pb-2 lg:pl-6 lg:pr-6 lg:pb-6">
				<div className="text-fs-20 font-bold pb-4">{heading}</div>
				<div className="text-fs-12 text-body-black-light">{subheading}</div>
			</div>
		</div>
	);
};
export default DevToolsCard;
