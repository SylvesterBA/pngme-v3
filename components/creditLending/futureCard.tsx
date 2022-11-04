import Link from "next/link";
import Image from "next/image";
import React from "react";
import { IFutureCreditLendingCard } from "./types";

export interface FutureCardProps {
	card: IFutureCreditLendingCard;
}

const FutureCard = ({ card }: FutureCardProps) => {
	return (
		<div
			className={
				"p-4 font-pngme-inter bg-dirty-white flex flex-col items-start my-4"
			}
		>
			<div className="mt-2 mb-4">
				<Image src={card.iconUrl || ""} alt="" height={50} width={50} />
			</div>
			<div className={"fs-26 font-bold mb-1"}>{card.heading}</div>
			<div className={"fs-16 mb-4"}>{card.subheading}</div>
			<Link href={"#"}>
				<div className={"fs-14 text-primary-pink font-bold"}>
					Explore &#x2192;
				</div>
			</Link>
		</div>
	);
};
export default FutureCard;
