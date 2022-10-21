import Link from "next/link";
import Image from "next/image";
import React from "react";
import Button from "./button";

export enum ETextFontSize {
	sixteen = "text-fs-16",
	eighteen = "text-fs-18",
	thirtySix = "text-fs-36",
	fortyFour = "text-fs-44",
	sixty = "text-fs-60",
}
export interface CardProps {
	categoryText?: string;
	categoryTextSize?: ETextFontSize;
	topHeaderText?: string;
	topHeaderTextSize?: ETextFontSize;
	midHeaderText?: string;
	midHeaderTextSize?: ETextFontSize;
	backgroundColor?: string;
	buttonLink: string;
	buttonLabel: string;
	showPartners?: boolean;
	removePadding?: boolean;
}

const partnersImgs = [
	"asante.svg",
	"blackcopper.svg",
	"credpal.svg",
	"float.svg",
	"imalipay.svg",
	"inlaks.svg",
	"kuda.svg",
	"lipalater.svg",
	"shara.svg",
	"umba.svg",
];

const QuickInfoBox = ({
	buttonLabel,
	buttonLink,
	backgroundColor,
	categoryText,
	categoryTextSize = ETextFontSize.sixteen,
	topHeaderText,
	topHeaderTextSize = ETextFontSize.thirtySix,
	midHeaderText,
	midHeaderTextSize = ETextFontSize.sixty,
	showPartners = false,
	removePadding = false
}: CardProps) => {
	return (
		<div
			className={`${
				backgroundColor ? "bg-" + backgroundColor : "bg-dirty-white"
			} rounded`}
		>
			<div className={`font-pngme-helvetica text-center text-primary-purple ${removePadding ? '' :  'p-12 sm:p-28'}`}>
				{categoryText && <div className={`${categoryTextSize} uppercase font-bold text-primary-pink`}>{categoryText}</div>}
				<div className={topHeaderTextSize}>{topHeaderText}</div>
				<div className={midHeaderTextSize}>{midHeaderText}</div>
				<div className={"text-center font-pngme-inter mt-5"}>
					<Link href={buttonLink || "/"}>
						<Button type="primary" label={buttonLabel} />
					</Link>
				</div>
			</div>
			{showPartners ? (
				<div className="font-pngme-inter text-center grid grid-cols-12 gap-4 px-8">
					<div className="uppercase text-primary-pink col-span-12 md:col-span-2">
						Trusted by
					</div>
					<div className="text-center font-pngme-inter col-span-12 md:col-span-10">
						<div className="grid grid-cols-6 gap-2">
							{partnersImgs.map((pImage, index) => (
								<div key={index}>
									<Link href={buttonLink || "/"}>
										<Image
											src={`/images/partners/${pImage}`}
											alt={pImage}
											width={"100%"}
											height={"100%"}
											className="cursor-pointer"
										/>
									</Link>
								</div>
							))}
						</div>
					</div>
				</div>
			) : null}
		</div>
	);
};
export default QuickInfoBox;
