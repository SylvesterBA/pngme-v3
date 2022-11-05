import { useEffect, useState } from "react";
import MapCard from "./mapCard";
import contentful from "../../contentful";
import { IFutureCreditLendingCard } from "./types";
import FutureCard from "./futureCard";
import Carousel from "../carousel";

const CreditLending = () => {
	const [heading, setHeading] = useState("");
	const [subheading, setSubheading] = useState("");
	const [cards, setCards] = useState<Array<IFutureCreditLendingCard>>([]);

	useEffect(() => {
		contentful
			.getEntries({
				content_type: "futureCreditAndLendingCard",
			})
			.then((entries: any) => {
				const fclCards: Array<IFutureCreditLendingCard> = [];
				entries.items.forEach((item: any) => {
					const fclCard: IFutureCreditLendingCard = {
						heading: item.fields.heading || "",
						subheading: item.fields.subheading || "",
						iconUrl: `https:${item.fields.icon?.fields.file.url}` || "",
					};
					fclCards.push(fclCard);
				});
				setCards(fclCards);
			})
			.catch((error: any) => {
				console.error("error", error);
			});
		contentful
			.getEntries({
				content_type: "sectionHeaders",
			})
			.then((entries: any) => {
				const fclHeadings = entries.items.filter(
					(item: any) => item.fields.sectionName === "future-credit-lending"
				);
				if (fclHeadings.length) {
					setHeading(fclHeadings[0].fields.heading || "");
					setSubheading(fclHeadings[0].fields.subheading || "");
				}
			})
			.catch((error: any) => {
				console.error("error", error);
			});
	}, []);

	useEffect(() => {
		console.log("cards", cards);
	}, [cards]);

	useEffect(() => {
		console.log("heading, subheading", heading, subheading);
	}, [heading, subheading]);

	return (
		<div
			className={`bg-white bg-[url('/images/bg-wave-yellow.svg')] bg-top bg-contain bg-no-repeat items-center justify-center`}
		>
			<div className="p-12 sm:p-28">
				<MapCard />
			</div>
			<div>
				<div className="ml-12 mr-12 md:ml-28 md:mr-28 grid grid-cols-3">
					<div className="col-span-2">
						<div className="text-fs-36 font-pngme-helvetica">{heading}</div>
						<div className="text-fs-18">{subheading}</div>
					</div>
				</div>
				<div className="grid">
					<div className="m-12 pb-12 flex flex-col md:hidden">
						{cards &&
							cards.map((card, index) => {
								return <FutureCard card={card} key={index} />;
							})}
					</div>
				</div>
				<div className={"hide-to-md md:mt-12 md:pb-12 md:ml-28"}>
					{cards && <Carousel data={cards} type={"FutureCard"} />}
				</div>
			</div>
		</div>
	);
};

export default CreditLending;
