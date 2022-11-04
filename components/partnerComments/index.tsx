/* import Link from "next/link";
import DevToolsCard from "./devToolsCard"; */

import Carousel from "../carousel";
import PartnerCommentCard from "./partnerCommentCard";

export interface IPartnerComment {
	imgUrl: string;
	mainText: string;
	author: string;
	authorTitle: string;
}

const PartnerComments = () => {
	const comments: Array<IPartnerComment> = [
		{
			imgUrl: "/images/partners/blackcopper.svg",
			mainText:
				"Pngme helps us accelerate our customer acquisition by eliminating the points of failure in our loan application process; ensuring we make the best decisions first time.",
			author: "Muyita",
			authorTitle: "Blackcopper CEO",
		},
		{
			imgUrl: "/images/partners/float.svg",
			mainText:
				"Pngme helps us accelerate our customer acquisition by eliminating the points of failure in our loan application process; ensuring we make the best decisions first time.",
			author: "Logan",
			authorTitle: "Float CEO",
		},
		{
			imgUrl: "/images/partners/shara.svg",
			mainText:
				"Pngme helps us accelerate our customer acquisition by eliminating the points of failure in our loan application process; ensuring we make the best decisions first time.",
			author: "Magneto",
			authorTitle: "Shara CEO",
		},
		{
			imgUrl: "/images/partners/umba.svg",
			mainText:
				"Pngme helps us accelerate our customer acquisition by eliminating the points of failure in our loan application process; ensuring we make the best decisions first time.",
			author: "Professor X",
			authorTitle: "Umba CEO",
		},
	];
	return (
		<div
			className={`
				bg-white
				bg-[url('/images/quarter-circle.svg')] 
				bg-[position:right_0_bottom_0] 
				bg-[length:200px] 
				bg-contain 
				bg-no-repeat 
				p-6
				lg:p-24
			`}
		>
			<Carousel
				breakpointMedim={{ slidesPerView: 1 }}
				breakpointLarge={{ slidesPerView: 1 }}
				data={comments}
				type={"PartnerCommentCard"}
			/>
		</div>
	);
};

export default PartnerComments;
