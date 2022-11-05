/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { IMapCardData } from "./mapCard";

export interface ICountryMapProps {
	data: IMapCardData;
}

const CountryMap = ({ data }: ICountryMapProps) => (
	<div className="mt-10 grid">
		<img src={data.imgUrl} alt="" className="cursor-pointer" />

		<div className="font-bold mt-6 mb-2">{data.heading}</div>
		<div>{data.subheading}</div>
		<div className="text-primary-pink underline font-bold">
			<Link href={data.linkUrl}>Learn more</Link>
		</div>
	</div>
);

export default CountryMap;
